import React, { Component } from "react";
import "./index.css";
import GameModel from "./../game-model";
export default class Model extends Component {
  render() {
    const { type, onClick, onCancel } = this.props;

    return (
      <div className="model" onClick={onCancel}>
        <div className="container">
          <div className="model-content">
            <GameModel type={type} onClick={onClick} onCancel={onCancel} />
          </div>
        </div>
      </div>
    );
  }
}
