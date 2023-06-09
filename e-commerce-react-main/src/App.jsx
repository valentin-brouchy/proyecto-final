import Contacto from "./components/Contacto";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div>
      <BrowserRouter>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      
        
      </Routes>
      
       </BrowserRouter>
    </div>
   
    
  );
}

export default App;