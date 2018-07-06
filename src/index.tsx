import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './redux/counter';

import Test from './components/test';

ReactDOM.render(
    <Test compiler="me" framework="typescript2.9.3" />,
    document.getElementById('root')
);