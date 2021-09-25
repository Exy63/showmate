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

const showsPerPage = 50; // Количество на странице

function App() {
  const [showsData, setShowsData] = useState<ShowI[]>([]); // Все данные по шоу
  const [loading, setLoading] = useState<boolean>(false); // Состояние загрузки
  const [ApiPage, setApiPage] = useState<number>(0); // Страница в АПИ
  const [currentPage, setCurrentPage] = useState<number>(1); // Текущая страница пользователя
  const [addition, setAddition] = useState<number>(0); // Добавочное число к страницам
  const [currentShows, setCurrentShows] = useState<ShowI[]>([]); // Все данные по шоу

  const URL = `https://api.tvmaze.com/shows?page=${ApiPage}`;

  /** GET SHOWS DATA */
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      // console.log('URL :>> ', URL);
      const res: AxiosResponse<ShowI[]> = await axios.get<ShowI[]>(URL);
      setShowsData(res.data);
      setCurrentShows(res.data.slice(0, showsPerPage));
      setLoading(false);
    };
    fetchShows();
  }, [ApiPage]);

  /** Получить ApiPage по номеру страницы */
  function getApiPageByPickedPage(pickedPage: number) {
    let apiPage = Math.floor(((pickedPage - 1) * showsPerPage) / 250);
    return apiPage;
  }

  function getShowsForUser(pageNumber: number): void {
    let firstIndex = pageNumber * showsPerPage - showsPerPage;
    let lastIndex = pageNumber * showsPerPage - 1;
    setCurrentShows(showsData.slice(firstIndex, lastIndex));
  }

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
      setShowsData([]); // сбрасываем шоу из стора
      setApiPage(currentApiPage); // меняем страницу
    }

    getShowsForUser(pageNumber);
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
