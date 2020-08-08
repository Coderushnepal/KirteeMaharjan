import React from 'react'
import {BrowserRouter, Switch,  Route } from 'react-router-dom'


import Main from './main'

const Abc = ()=>(
    <h2>This is abc component</h2>
)
const Def = ()=>(
    <h2>This is def component</h2>
)

const RouterApp = ()=> (
    <BrowserRouter>
        <Switch>
            <Route path='/abc' component={Abc}/>
            <Route path='/def' component={Def}/>
            <Route path='/' component={Main}/>
        </Switch>
    </BrowserRouter>
)

export default RouterApp;