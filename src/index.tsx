import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store, Action } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import App from './components/test';


const store = createStore(reducers, {}, applyMiddleware(logger, thunk));

ReactDOM.render(
	<Provider store={store}>
		<App compiler={'kalec'} framework={'typescript2.9.3'} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
