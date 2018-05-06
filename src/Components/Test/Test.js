import React from "react";
import TestClass from "./TestApp";
import { Switch, Route } from "react-router-dom";
import "../../App.css"
class Test extends React.Component {
    change = (e) => {
        var uri = this.refs.url.value;
        this.refs.urlInput.value = uri;
        this.refs.urlInput.style.display = "block";
        this.refs.url.style.display = "none";
    }

    enter = (e) => {
        if (e.key === "Enter") {
            this.refs.urlInput.style.display = "none";
            this.refs.url.style.display = "block";
            window.location.href = this.refs.urlInput.value;
        }
    }
    blur = () => {
        this.refs.urlInput.style.display = "none";
        this.refs.url.style.display = "block";
    }
    render() {
        var url = window.location.pathname;
        return (
            <div className='test-com'>
                <div className="browser">
                    <div className="button">
                        <button onClick={function () { window.history.go(-1) }}><span>&#8592;</span></button>
                        <button onClick={function () { window.history.go(1) }}><span>&#8594;</span></button>
                    </div>
                    <div className="input">
                        <input ref="urlInput" onBlur={this.blur} onKeyPress={this.enter} style={{ 'display': 'none' }} onClick={this.change} />
                        <input ref="url" onClick={this.change} value={url} />
                    </div>

                    <button onClick={function () { window.location.reload() }} className="reload"><span>&#8634;</span></button>

                </div>
                <TestClass />
            </div>
        )
    }
}

export default Test;
