import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
// There is two ways to implement the context system

// second one Consumer
// the first one it is in the Field
class Button extends React.Component {
  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "ارسل";
  };

  renderColor = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => {
          return this.renderColor(color);
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
