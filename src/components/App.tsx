import { useState, useEffect} from "react";
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

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const res: AxiosResponse<ShowI[]> = await axios.get<ShowI[]>(
        "https://api.tvmaze.com/shows?page=" + ApiPage
      );
      setShows(res.data);
      setLoading(false);
    };

    fetchShows();
  }, []);

  // Get current shows
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <Title />
      <CardCollection showsData={currentShows} loading={loading} />
      <Pagination
        showsPerPage={showsPerPage}
        totalShows={showsData.length}
        paginate={paginate}
      />
      <Footer loading={loading}/>
    </div>
  );
}

export default App;
