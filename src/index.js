import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import MainView from './views/MainView/MainView';

const App = () => {
    return (
        <Provider store={store}>
            <MainView/>
        </Provider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
