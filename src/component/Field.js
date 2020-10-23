import React from "react";
import LanguageContext from "../contexts/LanguageContext";
// There is two ways to implement the context system

// First one this.context
// I will implement this here and the the second one on the button
class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "الاسم";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
