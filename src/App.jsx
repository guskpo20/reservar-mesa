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
import Forgot from "./pages/Forgot";
import NewPassword from "./pages/NewPassword";
/* Components */
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import { getToken, initAxiosInterceptors, verifyToken } from "./helpers/aut-helpers";

initAxiosInterceptors();


function App() {

    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setCargandoUsuario] = useState(true)

    useEffect(() => {
      async function cargarUsuario(){
        const token = getToken()
        if(!getToken()){
          setCargandoUsuario(false)
          return
        }

        try {
          let data = await verifyToken(token)
          data = data.data
          setUsuario({
            name: data.name,
            email: data.email,
            phone: data.phone
          })
          setCargandoUsuario(false)
        } catch (error) {
          console.log(error)
        }
      }

        cargarUsuario()
    }, [])

    /* useEffect(() => {
      return () => {
        console.log(usuario)
        setCargandoUsuario(false)
      };
    }, [usuario]) */

     return(
      <>
      {cargandoUsuario ? <div>Cargando</div> : 
        <Routes>
          <Route path="/" element={<Layout usuario={usuario ? {...usuario} : ""} />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/forgot" element={<Forgot  />} />
            <Route path="/user/forgot" element={<NewPassword  />} />
            <Route path="/verified" element={<MultiPage title={"Usuario Verificado correctamente!"} message={"Ahora puedes inicias sesion!"} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      
        </Routes>
      }
      </>
     )
}

export default App;