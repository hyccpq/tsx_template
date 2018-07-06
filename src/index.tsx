import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/counter';

import Test from './components/test';

const store = createStore(reducer);

store.subscribe(() => console.log("state update!", store.getState()));

store.dispatch({
    type: "INCREMENT"
});


ReactDOM.render(
    <Test compiler="kalec" framework="typescript2.9.3" />,
    document.getElementById('root')
);