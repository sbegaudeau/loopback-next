// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {HttpErrors, ParsedRequest} from '@loopback/rest';
import {Strategy} from 'passport';
import {UserProfile} from './providers/authenticate';

/**
 * Shimmed Request to satisfy express requirements of passport strategies.
 */
export class ShimRequest {
  headers: Object;
  query: Object;
  url: string;
  path: string;
  method: string;
  constructor(request: ParsedRequest) {
    this.headers = request.headers;
    this.query = request.query;
    this.url = request.url;
    this.path = request.path;
    this.method = request.method;
  }
}

/**
 * Adapter class to invoke passport-strategy
 *   1. provides express dependencies to the passport strategies
 *   2. provides shimming of requests for passport authentication
 *   3. provides lifecycle similar to express to the passport-strategy
 *   3. provides state methods to the strategy instance
 * see: https://github.com/jaredhanson/passport
 */
export class StrategyAdapter {
  /**
   * @param strategy instance of a class which implements a passport-strategy;
   * @description http://passportjs.org/
   */
  constructor(private readonly strategy: Strategy) {}

  /**
   * The function to invoke the contained passport strategy.
   *     1. Create an instance of the strategy
   *     2. add success and failure state handlers
   *     3. authenticate using the strategy
   * @param req {http.ServerRequest} The incoming request.
   */
  authenticate(req: ParsedRequest) {
    const shimReq = new ShimRequest(req);
    return new Promise<UserProfile>((resolve, reject) => {
      // create a prototype chain of an instance of a passport strategy
      const strategy = Object.create(this.strategy);

      // add success state handler to strategy instance
      strategy.success = function(user: UserProfile) {
        resolve(user);
      };

      // add failure state handler to strategy instance
      strategy.fail = function(challenge: string) {
        reject(new HttpErrors.Unauthorized(challenge));
      };

      // add error state handler to strategy instance
      strategy.error = function(error: string) {
        reject(new HttpErrors.InternalServerError(error));
      };

      // authenticate
      strategy.authenticate(shimReq);
    });
  }
}
