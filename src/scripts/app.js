import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import { BrowserRouter, HashRouter } from 'react-router-dom'

//测试 test js
import './testJs/demo1.js';
import './testJs/demo2.js';
import './testJs/demo3.js';
import './testJs/demo4.js';

//引入 mobx --> store
import store from './views/AdminStore.js';

// 引入 router
import AdminRouter from './views/AdminRouter.jsx';

// 引入样式文件
import '../styles/main.scss';


ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <AdminRouter />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);
