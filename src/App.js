import "./styles.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/routes/Home";
import About from "../src/routes/About";
import Services from "../src/routes/Services";
import Contact from "../src/routes/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
