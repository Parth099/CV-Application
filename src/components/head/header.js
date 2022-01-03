import "./header.css";
import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-bg">
                <h1 className="header-text">{this.props.appName}</h1>
                <button className="btn add float" onClick={this.props.sf}>
                    console.log(YOUR-DATA)
                </button>
            </div>
        );
    }
}
