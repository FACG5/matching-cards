import React, { Component } from "react";
import "./index.css";
export default class Links extends Component {
  render() {
    return (
      <div className="links">
        <span path={this.props.link}>{this.props.word}</span>
      </div>
    );
  }
}
