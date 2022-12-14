//Dependices
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//Pages
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
//Component
import NavBar from "./Components/NavBar";
//Styles
import "./App.css";


function App() {
  const [cart, setCart] = useState([]);
 
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/electric" element={<Index cart={cart} setCart={setCart} />} />
            <Route path="/electric/:id" element={<Show />} />
            <Route path="/electric/:id/edit" element={<Edit />} />
            <Route path="/electric/new" element={<New />} />
            <Route path="/electric/cart" element={<Cart cart={cart}/>}/>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
