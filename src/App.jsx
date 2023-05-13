import { Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Reserva from "./pages/Reserva";
import Login from "./pages/Login";
import MultiPage from "./pages/MultiPage";

/* Components */
import Layout from "./components/Layout";



function App() {
     return(
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/verified" element={<MultiPage title={"Usuario Verificado correctamente!"} message={"Ahora puedes inicias sesion!"} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    
      </Routes>
      </>
     )
}

export default App;