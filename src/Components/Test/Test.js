import React from "react";
import TestClass from "./TestApp";
import { Switch, Route } from "react-router-dom";
import "../../App.css"
class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
     }
    render() {
        return (
            <div className='test-com'>
                <div className="browser">
                    <div className="button">
                        <button><span>&#8592;</span></button>
                        <button><span>&#8594;</span></button>
                    </div>
                    <div className="input">
                     <input value={window.location.pathname}/>
                     </div>

                </div>
                <TestClass />
            </div>
        )
    }
}

export default Test;
