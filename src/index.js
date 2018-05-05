import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hoho from './sourceCampathonApp/7/TestRoute';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(

  <BrowserRouter>
       <Hoho />
   </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
