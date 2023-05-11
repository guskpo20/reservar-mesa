import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "../styles/navbar.module.css"

function Navbar() {
    const [expandedNavbar, setExpandedNavbar] = useState(false)
    

    return (
    <header>
        <div className={styles.navbar}>
            <img className={styles.logo} src={"../../public/images/logo.jpg"}></img>
            <ul className={styles.list}>
                <li><Link to="/" className={styles.links}>Inicio</Link></li>
                <li><Link to="/menu" className={styles.links}>Menu</Link></li>
                <li><Link to="/about" className={styles.links}>Sobre nosotros</Link></li>
            </ul>
            <Link to="/login" className={`${styles.login}`}>Identificarse</Link>
            <div className={expandedNavbar ? `${styles.toggle_btn} ${styles.toggle_btn_open}` : `${styles.toggle_btn}` } onClick={() => setExpandedNavbar(!expandedNavbar)}>
                <div className={styles.toggle_btn_burguer}></div>
            </div>
        </div>

        <div className={expandedNavbar ? `${styles.dropdown_menu} ${styles.open}` : `${styles.dropdown_menu}` }>
            <ul>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/" className={styles.links}>Inicio</Link></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/menu" className={styles.links}>Menu</Link></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/about" className={styles.links}>Sobre nosotros</Link></li>
                <li onClick={() => setExpandedNavbar(!expandedNavbar)}><Link to="/login" className={`${styles.login}`}>Identificarse</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar
