import React, { Component } from "react";
import Links from "./../links";
import "./aside.css";

export default class aside extends Component {
  state = {
    showSide: false
  };
  ShowSide = () => this.setState({ showSide: !this.state.showSide });

  render() {
    const { showSide } = this.state;
    return (
      <div>
        <span className="showSlid" onClick={this.ShowSide}>
          <span />
          <span />
          <span />
        </span>

        {showSide ? (
          <div className="aside showSide">
            <Links word="Match Game " />
            <Links word=" Github Application" />
          </div>
        ) : (
          <div className="aside" />
        )}
      </div>
    );
  }
}
