import React from 'react'
import {Link} from 'react-router-dom'

import Routes from './router/route'

export default class App extends React.Component{
    componentDidMount(){
        //222
    }
    render(){
        return[
            <Routes key='routes'/>
        ]
    }
}