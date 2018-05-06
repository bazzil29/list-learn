import React, { Component } from 'react';
import {Switch, Route ,Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


class TestClass extends React.Component {
  render(){
    return (
      <div>
        <Link to={'/modal'}>
      <button>Mở popup</button>
      </Link>
        <Switch>
            <Route exact path = {'/modal'} component={Modal}/>
        </Switch>
      </div>
    )
  }
}

class Modal extends React.Component {
  render(){
    const style={
    "background":"red",
      "height":"200px",
      "width":"300px",
      "margin":"auto"
    }
    return (
      <div style={style}>
        <Link to={'/popup'}>Đóng</Link>
      </div>
    )
  }
}

export default TestClass
