import { BrowserRouter, Routes, Route } from "react-router-dom";
import Informacion from "./Informacion";
import Favorito from "./Favorito";
import Creacion from "./Creacion";
import Layout from "./Layout";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      
    <Route path="/" element={<Home/>}/>
    <Route path="/Creaciones" element={<Creacion />} />
    <Route path="/Favoritos" element={<Favorito />} />
    <Route path="/Info" element={<Informacion />} />

    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;