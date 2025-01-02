import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Conatct/Conatct";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
