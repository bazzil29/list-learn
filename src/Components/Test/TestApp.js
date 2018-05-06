import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


class TestClass extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/page1'}>
                    <button>Mở page1</button>
                </Link>
                <Link to={'/page2'}>
                    <button>Mở page2</button>
                </Link>
                <Switch>
                    <Route exact path={'/page1'} component={Modal} />
                    <Route exact path={'/page2'} component={Modal2} />
                </Switch>
            </div>
        )
    }
}

class Modal extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/home'}>Ve trang chu</Link>
                <p>Day la page1</p>
            </div>
        )
    }
}

class Modal2 extends React.Component{
  render() {

      return (
          <div>
              <Link to={'/home'}>Ve trang chu</Link>
              <p>Day la page2</p>
          </div>
      )
  }
}
export default TestClass
