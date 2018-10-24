import React, { Component } from "react";
import "./index.css";
export default class GameModel extends Component {
  loserStyle = {
    margin: "5rem",
    width: "50%"
  };

  render() {
    const { type, onClick, onCancel } = this.props;
    console.log("the game type", this.props);
    return (
      <div>
        <div className="game-model-header">
          {type ? (
            <span> Congratulations</span>
          ) : (
            <span> Fall , Try Again </span>
          )}
        </div>
        <div className="game-model-img">
          {type ? (
            <img
              src="https://image.freepik.com/free-vector/trophie_53876-25485.jpg"
              alt="Winner Image"
            />
          ) : (
            <img
              style={this.loserStyle}
              src="https://static1.squarespace.com/static/56f16448c6fc082504acb7fe/t/58745069cd0f68919b1e2785/1484017788203/Try-Again-Button.png"
              alt="Loser Img"
            />
          )}
        </div>
        <div className="game-model-buttons">
          <button onClick={onClick}>Play Again</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
