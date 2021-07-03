import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    const style = `
    button {
        padding: 8px 14px;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    
    .appearance-primary {
        background-color: hsl(216, 100%, 40%);
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-primary:hover {
        background-color: hsl(216, 100%, 50%);
    }
    
    .appearance-subtle {
        background-color: hsla(216, 100%, 40%, 0);
        color: hsl(217, 14%, 48%);
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-subtle:hover {
        background-color: hsla(0, 0%, 0%, 0.096);
    }
    
    .appearance-link {
        background-color: hsla(0, 0%, 0%, 0);
        color: hsl(216, 100%, 40%);
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-link:hover {
        color: hsl(216, 100%, 45%);
        text-decoration: underline;
    }
    
    .appearance-subtle-link {
        background-color: hsla(0, 0%, 0%, 0);
        color: hsl(217, 14%, 48%);
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-subtle-link:hover {
        color: hsl(217, 14%, 53%);
        text-decoration: underline;
    }
    
    .appearance-warning {
        background-color: hsl(37, 100%, 47%);
        color: rgb(23, 43, 77);
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-warning:hover {
        background-color: hsl(37, 100%, 52%);
    }
    
    .appearance-danger {
        background-color: hsl(12, 91%, 46%);
        color: rgb(255, 253, 253);
        border-radius: 3px;
        cursor: pointer;
    }
    
    .appearance-danger:hover {
        background-color: hsl(12, 91%, 51%);
    }

    .isDisabled {
        background-color: hsl(0, 0%, 90%);
        color: hsl(217, 14%, 48%);
        cursor: not-allowed;
    }
    .isDisabled:hover {
        background-color: hsl(0, 0%, 90%);
        color: hsl(217, 14%, 48%);
        cursor: not-allowed;
    }
    .isSelected {
        background-color: rgb(36, 56, 88);
        color: rgb(244, 245, 247);
        cursor: pointer;
        border-radius: 3px;
    }
    .isLoading {
        position: relative;
        padding: 14px 40px;
        border: none;
        outline: none;
        border-radius: 2px;
    }
    
    .isLoading::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        inset: 0;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }
    
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(1turn);
        }
    }
    .shouldFitContainer {
        width: 100%;
    }
    .compact {
        padding: 2px 4px;
    }
    
    .none {
        padding: 0px 0px;
    }
    `;
    return (
      <button
        className={`appearance-${this.props.appearance} ${
          this.props.isDisabled ? "isDisabled" : ""
        } ${this.props.isSelected ? "isSelected" : ""} ${
          this.props.isLoading ? "isLoading" : ""
        } ${this.props.shouldFitContainer ? "shouldFitContainer" : ""} ${
          this.props.spacing === "compact" ? "compact" : ""
        } ${this.props.spacing === "none" ? "none" : ""}`}
        disabled={this.props.isDisabled}
      >
        {this.props.iconBefore}&nbsp;
        {this.props.children}&nbsp;
        {this.props.iconAfter}
        <style>{style}</style>
      </button>
    );
  }
}

export class LoadingButton extends Component {
  render() {
    return (
      <button
        className={`appearance-${this.props.appearance} ${
          this.props.isLoading ? "isLoading" : ""
        }`}
      >
        {this.props.isLoading ? "" : this.props.children}
      </button>
    );
  }
}
