import { Outlet } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./Navbar";
import Footer from "./Footer"

function Layout({usuario}) {
  return (
    <div>
        <Navbar usuario={usuario ? {...usuario} : ""}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
