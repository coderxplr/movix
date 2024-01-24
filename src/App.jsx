import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log("res: ", res);
    });
  };

  return (
    <div className="App">
      {/* {fetchDataFromApi("/genre/movie/list?language=en")} */}
    </div>
  );
}

export default App;
