import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Povijest from "./Components/Povijest";
import Zemlje from "./Components/Zemlje";
import Naslovna from "./Components/naslovna";
import Galerija from "./Components/Galerija";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/Povijest" element={<Povijest />}></Route>
          <Route path="/Zemlje" element={<Zemlje />}></Route>
          <Route path="/Galerija" element={<Galerija />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
