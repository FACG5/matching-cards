import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  render() {
    const { score, remainTime } = this.props;
    return (
      <div className="header">
        <div className="container">
          <span className="gameScore">
            Game Score : <span className="scoreValue">{score} </span>
          </span>
          <span className="gameName">Match Game</span>
          <span>
            Remaning Time:
            {`  ${remainTime} s`}
          </span>
        </div>
      </div>
    );
  }
}
