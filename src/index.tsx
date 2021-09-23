import React from "react";
import { render } from "react-dom";
import App from "./components/App";

class MovieMate extends React.Component {
  render() {
    return <App />;
  }
}

render(<MovieMate />, document.getElementById("root"));
