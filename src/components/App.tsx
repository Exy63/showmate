import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import { SerialI } from "../interfaces";
import axios, { AxiosResponse } from "axios";

function App() {
  const [serialData, setSerial] = useState<SerialI[]>([]);

  useEffect(() => {
    axios
      .get<SerialI[]>("https://api.tvmaze.com/shows?page=1")
      .then((response: AxiosResponse) => {
        console.clear();
        console.log("response :>> ", response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
