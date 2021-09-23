import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Card from "./Card";
import { SerialI } from "../interfaces";
import axios, { AxiosResponse } from "axios";

function App() {
  const [serialData, setSerial] = useState<SerialI[]>([]);
  console.clear();
  console.log("serialData :>> ", serialData);

  useEffect(() => {
    axios
      .get<SerialI[]>("https://api.tvmaze.com/shows?page=1")
      .then((response: AxiosResponse) => {
        setSerial(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Title />
      <Card
        image="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
        name="Kirby Buckets"
        genres={["Drama", "Family", "Romance"]}
        country="United States"
        runtime={30}
        rating={9.1}
      />
      <Card
        image="https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg"
        genres={["Comedy"]}
      />
      <Card image="https://static.tvmaze.com/uploads/images/medium_portrait/316/792450.jpg" />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
