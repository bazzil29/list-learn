import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Components/Test/Test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
