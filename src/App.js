

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
