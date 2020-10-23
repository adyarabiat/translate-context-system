import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { Language: "english" };

  onLanguageChange = (Language) => {
    this.setState({ Language: Language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag jo"
            onClick={() => this.onLanguageChange("arabic")}
          />
        </div>

        <br />

        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.Language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
