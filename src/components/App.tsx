import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
// Interfaces
import { ShowI } from "../interfaces";
// Components
import Header from "./Header";
import Title from "./Title";
import CardCollection from "./CardCollection";
import Pagination from "./Pagination";
import Footer from "./Footer";

function App() {
  const [showsData, setShows] = useState<ShowI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showsPerPage] = useState<number>(50);
  const [ApiPage, setApiPage] = useState<number>(0);
  const [addition, setAddition] = useState<number>(0);

  /** GET SHOWS DATA */
  useEffect(() => {
    const fetchShows = async (page: number) => {
      setLoading(true);
      const res: AxiosResponse<ShowI[]> = await axios.get<ShowI[]>(
        "https://api.tvmaze.com/shows?page=" + page
      );
      setShows(res.data);
      setLoading(false);
    };

    fetchShows(ApiPage);
  }, []);

  /** Получить ApiPage по номеру страницы */
  function getApiPageByPickedPage(pickedPage: number) {
    let apiPage = Math.floor(((pickedPage - 1) * 50) / 250);
    return apiPage;
  }

  // Get current shows
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow);

  /** Change page */
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Переключаем страницу

    // страница API
    let oldApiPage = ApiPage; // Старая страница API
    let currentApiPage = getApiPageByPickedPage(pageNumber); // Новая страница API

      // Если они не равны, то хукаем
    if (oldApiPage !== currentApiPage) {
      if (currentApiPage < oldApiPage) {
        setAddition(addition - 5);
      }
      if (oldApiPage < currentApiPage) {
        setAddition(addition + 5);
      }
      setApiPage(currentApiPage);
    }
  };

  return (
    <div>
      <Header />
      <Title />
      <CardCollection showsData={currentShows} loading={loading} />
      <Pagination
        showsPerPage={showsPerPage}
        totalShows={showsData.length}
        paginate={paginate}
        addition={addition}
      />
      <Footer loading={loading} />
    </div>
  );
}

export default App;
