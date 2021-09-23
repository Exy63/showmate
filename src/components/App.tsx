import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Card from "./Card";
import { ShowI } from "../interfaces";
import axios, { AxiosResponse } from "axios";
import CardCollection from "./CardCollection";

function App() {
  const [showsData, setShows] = useState<ShowI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(50);
  const [page, setPage] = useState<number>(0);
  console.clear();
  console.log("showsData :>> ", showsData);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const res: AxiosResponse<ShowI[]> = await  axios.get<ShowI[]>("https://api.tvmaze.com/shows?page=" + page)
      setShows(res.data);
      setLoading(false)
    }

    fetchShows();
  }, []);

  console.log('object :>> ', showsData);


  return (
    <div>
      <Header />
      <Title />
      <CardCollection showsData={showsData} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
