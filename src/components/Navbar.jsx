import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import styles from "../styles/navbar.module.css"
import { deleteToken } from "../helpers/aut-helpers"
import { useNavigate } from "react-router-dom"

function Navbar({usuario}) {
    const [expandedNavbar, setExpandedNavbar] = useState(false)
    const [cerrarSesionExpanded, setCerrarSesionExpanded] = useState(false)
    let navigateTo = useNavigate();

    const handleLogOut = () =>{
        deleteToken()
        navigateTo('/')
    }

    return (
    <header>
        <div className={styles.navbar}>
            <img className={styles.logo} src={"/images/logo.png"}></img>
            <ul className={styles.list}>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Inicio</NavLink></li>
                <li><NavLink to="/menu" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Menu</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Sobre nosotros</NavLink></li>
                <li><NavLink to="/reservas" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Reservas</NavLink></li>
            </ul>
            {usuario ?
                 <div className={styles.navbar_buttons}><div className={`${styles.login}`}>{usuario?.name}</div></div>
            :   
                <div className={styles.navbar_buttons}>
                    <Link to="/register" className={`${styles.login}`}>Registrarse</Link>
                    <Link to="/login" className={`${styles.login}`}>Identificarse</Link>
                </div>
            }
            
            <div className={expandedNavbar ? `${styles.toggle_btn} ${styles.toggle_btn_open}` : `${styles.toggle_btn}` } onClick={() => setExpandedNavbar(!expandedNavbar)}>
                <div className={styles.toggle_btn_burguer}></div>
            </div>
        </div>

        <div className={expandedNavbar ? `${styles.dropdown_menu} ${styles.open}` : `${styles.dropdown_menu}` }>
            <ul>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Inicio</NavLink></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><NavLink to="/menu" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Menu</NavLink></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Sobre nosotros</NavLink></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><NavLink to="/reservas" className={({ isActive }) => (isActive ? `${styles.active_link} ${styles.links}` : `${styles.links}`) }>Reservas</NavLink></li>
                {usuario ?
                <>
                <li onClick={() => setCerrarSesionExpanded(!cerrarSesionExpanded)} ><div className={`${styles.login}`}>{usuario?.name}</div></li> 
                <li onClick={() => handleLogOut()} ><div className={ cerrarSesionExpanded ? `${styles.sign_out} ${styles.logout}` : `${styles.logout}`}>Cerrar Sesion!</div></li>
                </>
                : 
                <>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/register" className={`${styles.login}`}>Registrarse</Link></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/login" className={`${styles.login}`}>Identificarse</Link></li>
                </>
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar
