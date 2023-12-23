import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import Contact from "../../pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
