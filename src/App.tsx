import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./Pages/Movie";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
