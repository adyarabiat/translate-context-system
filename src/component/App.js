import React from "react";
import UserCreate from "./UserCreate";
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

        <UserCreate />
      </div>
    );
  }
}

export default App;
