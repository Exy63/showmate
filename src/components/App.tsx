import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Card from "./Card";
import { ShowI } from "../interfaces";
import axios, { AxiosResponse } from "axios";

function App() {
  const [showsData, setShows] = useState<ShowI[]>([]);
  const [page, setPage] = useState<number>(0);
  console.clear();
  console.log("showsData :>> ", showsData);

  useEffect(() => {
    axios
      .get<ShowI[]>('https://api.tvmaze.com/shows?page=' + page)
      .then((response: AxiosResponse) => {
        setShows(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Title />
      {showsData.map((show) => (
        <Card
          key={show.id}
          image={show.image.medium}
          genres={show.genres}
          name={show.name}
          country={show.network?.country?.name || show.webChannel?.country?.name}
          runtime={show.runtime}
          rating={show.rating.average}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
