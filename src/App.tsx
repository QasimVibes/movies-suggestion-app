import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";


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
