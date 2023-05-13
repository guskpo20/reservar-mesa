import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import styles from "../styles/navbar.module.css"

function Navbar() {
    const [expandedNavbar, setExpandedNavbar] = useState(false)
    
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
            <div className={styles.navbar_buttons}>
                <Link to="/register" className={`${styles.login}`}>Registrarse</Link>
                <Link to="/login" className={`${styles.login}`}>Identificarse</Link>
            </div>
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
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/register" className={`${styles.login}`}>Identificarse</Link></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/login" className={`${styles.login}`}>Identificarse</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar
