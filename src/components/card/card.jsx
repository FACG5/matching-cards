import React, { Component } from "react";
import "./card.css";
export default class Card extends Component {
  render() {
    const { flipped, checked, id, onClick, value } = this.props;
    return (
      <div className="mainCard">
        {flipped || checked ? (
          <div className="front flipeFront" onClick={() => onClick(id)}>
            Front
          </div>
        ) : (
          <div className="front" onClick={() => onClick(id)}>
            Front
          </div>
        )}

        {flipped || checked ? (
          <div className="back flipeBack">{value}</div>
        ) : (
          <div className="back">{value}</div>
        )}
      </div>
    );
  }
}
