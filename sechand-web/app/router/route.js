import React from 'react'
import { Route,
         Redirect,
} from 'react-router-dom'
import Content from '../component/content/content'
import Detail from '../component/detail/detail'

export default () => [
    <Route path='/' render={() => <Redirect to="/index" />} exact key='first'/>,
    <Route path='/index' component={Content} key='index'/>,
    <Route path='/detail' component={Detail} key='detail'/>
]