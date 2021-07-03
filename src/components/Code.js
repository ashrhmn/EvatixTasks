import React, { Component } from "react";
// import "./Code.css";
export default class Code extends Component {
  render() {
    const style = `@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        span {
            background-color: rgb(244, 245, 247);
            font-family: 'Ubuntu', sans-serif;
        }`;
    return (
      <span style={{}}>
        {this.props.children}
        <style>{style}</style>
      </span>
    );
  }
}
