import React, { Component } from 'react';
import {Switch, Route ,Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


class Hoho extends React.Component {
  render(){
    return (
      <div>
        <Switch>
            <Route exact path = {'/con1'} component={Con1}/>
            <Route exact path = {'/con2'} component={Con2}/>
        </Switch>
      </div>
    )
  }
}

class Con1 extends React.Component {
  render(){
    return (
      <div>
        <Link to={'/con2'}>Con2</Link>
      </div>
    )
  }
}


class Con2 extends React.Component {
  render(){
    return (
      <div>
        <Link to={'/con1'}>Con1</Link>
      </div>
    )
  }
}

export default Hoho
