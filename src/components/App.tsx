// Packages
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
  // HOOKS
  const [ApiData, setApiData] = useState<ShowI[]>([]); // Все данные с АПИ
  const [loading, setLoading] = useState<boolean>(false); // Состояние загрузки
  const [ApiPage, setApiPage] = useState<number>(0); // Страница в АПИ
  const [UserPage, setUserPage] = useState<number>(1); // Страница пользователя
  const [addition, setAddition] = useState<number>(0); // Добавочное число к страницам

  // VARIABLES
  const URL = `https://api.tvmaze.com/shows?page=${ApiPage}`;
  const firstIndex = UserPage * showsPerPage - showsPerPage;
  const lastIndex = UserPage * showsPerPage;
  const UserData = ApiData.slice(firstIndex, lastIndex);

  // FUNCTIONS

  /**
   * Get Data
   * */
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const res: AxiosResponse<ShowI[]> = await axios.get<ShowI[]>(URL);
      setApiData(res.data);
      setLoading(false);
    };
    fetchShows();
  }, [URL, ApiPage]);

  /**
   * Change UserPage
   * */
  function paginate(page: number) {
    if (page > 5) {
      do {
        page = page - 5;
      } while (page > 5);
    }
    setUserPage(page);
  }

  /**
   * Change ApiPage
   * */
  function paginateApi(page: number) {
    setApiData([]); // Очистка данных
    setApiPage(ApiPage + page); // Переключение страницы в API
    // Обработка данных для страницы
    if (page === -1) {
      setAddition(addition - 5); 
      setUserPage(5)
    }
    if (page === 1) {
      setAddition(addition + 5);
      setUserPage(1);
    }
  }

  // RETURN

  return (
    <div>
      <Header />
      <Title />
      <CardCollection data={UserData} loadingStatus={loading} />
      <Pagination
        itemsPerPage={showsPerPage}
        totalItems={ApiData.length}
        trigger={paginate}
        mainTrigger={paginateApi}
        addition={addition}
        idHighlight={UserPage}
      />
      <Footer loadingStatus={loading} />
    </div>
  );
}

export default App;
