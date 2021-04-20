import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("The data has been requested");
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("The data has been updated!");
  }

  render() {
    if (this.state.lat === null && this.state.errorMessage === "") {
      return <Spinner />;
    }
    return (
      <div>
        {this.state.lat ? (
          <SeasonDisplay lat={this.state.lat} />
        ) : (
          <div>Error: {this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
