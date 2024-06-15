import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
