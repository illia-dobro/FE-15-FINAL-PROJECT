import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export const logger = createLogger({
	duration: true,
	collapsed: true,
	colors: {
	},
});

const developmentEnvironment = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = developmentEnvironment && devtools ? devtools : compose;

const middleware = [thunk];

if (developmentEnvironment) {
	middleware.push(logger);
}

export { composeEnhancers, middleware };
