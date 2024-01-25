import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log("state: ", url);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log("res: ", res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      APP
      {url?.total_pages}
    </div>
  );
}

export default App;
