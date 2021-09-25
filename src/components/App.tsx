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
  const [ApiData, setApiData] = useState<ShowI[]>([]); // Все данные с АПИ
  const [loading, setLoading] = useState<boolean>(false); // Состояние загрузки
  const [ApiPage, setApiPage] = useState<number>(0); // Страница в АПИ


  const [UserPage, setUserPage] = useState<number>(1); // Текущая страница пользователя
  const [addition, setAddition] = useState<number>(0); // Добавочное число к страницам


  // CONSTS
  const URL = `https://api.tvmaze.com/shows?page=${ApiPage}`;
  const firstIndex = UserPage * showsPerPage - showsPerPage;
  const lastIndex = UserPage * showsPerPage;
  const UserData = (ApiData.slice(firstIndex, lastIndex));

  // FUNCTIONS

  /** GET DATA FROM API*/
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const res: AxiosResponse<ShowI[]> = await axios.get<ShowI[]>(URL);
      setApiData(res.data);
      setLoading(false);
    };
    fetchShows();
  }, [URL, ApiPage]);


// Change UserPage
function paginate(page: number) {
  
  console.log('page before :>> ', page);

  if (page > 5) {    
    do {
      page = page - 5
    } while (page > 5)
  }
  console.log('page after :>> ', page);
    setUserPage(page);
  }

// Change ApiPage
function paginateApi(page: number) {
  setApiData([])
  setUserPage(1)
  setApiPage(ApiPage + page);
  if (page === -1) {
    setAddition(addition - 5)
  }
  if (page === 1) {
    setAddition(addition + 5)
  }
}

// console.log('ApiData :>> ', ApiData);
// console.log('ApiPage :>> ', ApiPage);
// console.log('UserData :>> ', UserData);
// console.log('UserPage :>> ', UserPage);



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
      />
      <Footer loadingStatus={loading} />
    </div>
  );
}

export default App;
