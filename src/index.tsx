import React from "react";
import { render } from "react-dom";
import Test from "./components/App";

class App extends React.Component {
  render() {
    return <Test />;
  }
}

render(<App />, document.getElementById("root"));
