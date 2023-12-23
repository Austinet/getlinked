import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </>
  )
}

export default App