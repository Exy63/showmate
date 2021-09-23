import React from "react";
import { render } from "react-dom";
import App from "./components/App";

class ShowMate extends React.Component {
  render() {
    return <App />;
  }
}

render(<ShowMate />, document.getElementById("root"));
