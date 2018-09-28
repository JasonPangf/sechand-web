//main.js 
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './component/header/header';
import Input from './component/input/input_area';
import Underside from './component/underside/underside'

import App from './app'

import './main.css';//使用require导入css文件

const root = document.getElementById('root')
const render = (Component) => {
    ReactDOM.hydrate(
        <div>
            <Header/>
            <Input/>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <Underside/>
        </div>,
        root
    )
}
render(App)