import logo from "./logo.svg";
import "./App.css";
import Filmes from "./components/Filmes";
import NavBar from "./navegação/NavBar";
import Series from "./components/Series";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./navegação/Footer";

function App() {
  return (
    <Router>
      <div className="App font-title ">
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
