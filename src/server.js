// @flow
import Hapi from 'hapi'
import env from './env.config';
import routes from './routes';

const server = new Hapi.Server();
server.connection({
	port: env.SERVICE_PORT
});

server.route(routes);
if (!module.parent) {
  server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

export default server;
