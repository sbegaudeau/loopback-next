import {Application, ApplicationConfig, Server} from '@loopback/core';
import {RestComponent, SequenceHandler, SequenceFunction} from './index';
import {Binding, Constructor} from '@loopback/context';
import {format} from 'util';
import {RestBindings} from './keys';

export const ERR_NO_MULTI_SERVER = format(
  'RestApplication does not support multiple servers!',
  'To create your own server bindings, please extend the Application class.',
);

// To help cut down on verbosity!
export const SequenceActions = RestBindings.SequenceActions;

/**
 * An implementation of the Application class that automatically provides
 * an instance of a REST server. This application class is intended to be
 * a single-server implementation. Any attempt to bind additional servers
 * will throw an error.
 *
 */
export class RestApplication extends Application {
  constructor(config?: ApplicationConfig) {
    const cfg = Object.assign({}, config);

    // If the configuration provides an array of components, we want
    // to preserve that collection, but also ensure that it contains
    // RestComponent.
    if (!cfg.components) {
      cfg.components = [];
    }
    if (!cfg.components.includes(RestComponent)) {
      cfg.components.push(RestComponent);
    }
    super(cfg);
  }

  server(server: Constructor<Server>, name?: string): Binding {
    if (this.findByTag('server').length > 0) {
      throw new Error(ERR_NO_MULTI_SERVER);
    }
    return super.server(server, name);
  }

  sequence(sequence: Constructor<SequenceHandler>): Binding {
    return this.bind(RestBindings.SEQUENCE).toClass(sequence);
  }

  handler(handlerFn: SequenceFunction) {
    // FIXME(kjdelisle): I attempted to mimic the pattern found in RestServer
    // with no success, so until I've got a better way, this is functional.
    const server = this.getSync('servers.RestServer');
    server.handler(handlerFn);
  }
}
