import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import ShopDetail from "./Pages/ShopDetail";

function App() {
  return (
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
