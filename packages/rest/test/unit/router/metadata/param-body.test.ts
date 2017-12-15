// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: @loopback/rest
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {post, param, getControllerSpec} from '../../../..';
import {expect} from '@loopback/testlab';

describe('Routing metadata for parameters', () => {
  describe('@param.body', () => {
    it('defines a parameter with in:body', () => {
      class MyController {
        @post('/greeting')
        @param.body('data', {type: 'object'})
        greet(name: string) {}
      }

      const actualSpec = getControllerSpec(MyController);

      expect(actualSpec.paths['/greeting']['post'].parameters).to.eql([
        {
          name: 'data',
          in: 'body',
          schema: {type: 'object'},
        },
      ]);
    });
    it('accepts a type definition', () => {
      class Model {
        foo: number;
      }

      class MyController {
        @post('/greeting')
        @param.body('name', Model)
        greet(name: string) {}
      }

      const actualSpec = getControllerSpec(MyController);
      expect(actualSpec.paths['/greeting']['post'].parameters).to.eql([
        {
          name: 'name',
          in: 'body',
          schema: {
            $ref: '#/definitions/Model',
          },
        },
      ]);
    });
  });
});
