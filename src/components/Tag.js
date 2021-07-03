import React, { Component } from "react";
import "./Tag.css";
export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = { shown: true };
  }
  render() {
    return (
      <div
        style={{ display: `${this.state.shown ? "block" : "none"}` }}
        className="tag"
      >
        <span id="text" className="tag-text">{this.props.text}</span>
        <button id="cls"
          onClick={() => {
            this.setState({ shown: false });
            console.log(this.state.shown);
          }}
          className="close-btn"
        >
          x
        </button>
      </div>
    );
  }
}

export class SimpleTag extends Component {
  render() {
    return (
      <div className="tag">
        {this.props.href ? (
          <a className="tag-text" href={this.props.href}>
            {this.props.text}
          </a>
        ) : (
          <span className="tag-text">{this.props.text}</span>
        )}
      </div>
    );
  }
}
