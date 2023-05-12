import styles from "../styles/footer.module.css"


function Footer() {
  return (
    <>
      <footer>
        <div className={styles.main_footer}>
          <div>
            <h3>Horarios:</h3>
            <p>Lunes a Viernes: XX:XX - XX:XX</p>
            <p>Sabados: XX:XX - XX:XX</p>
            <p>Domingos: XX:XX - XX:XX</p>
          </div>
          <div>
            <h3>Pagina creada por:</h3>
            <div><img src="/images/code.png" /><p>Gustavo Keymetlian</p></div>
            <div><img src="/images/github.png" /><a href="https://github.com/guskpo20"><p>Github</p></a></div>
            <div><img src="/images/linkedin.png" /><a href="https://uy.linkedin.com/in/gustavo-keymetlian"><p>LinkedIn</p></a></div>
          </div>
          <div>
            <h3>Informacion:</h3>
            <div><img src="/images/lugar.png" /><p>Ubicacion: Lorem ipsum dolor sit amet.</p></div>
            <div><img src="/images/telefono.png" /><p>Telefono: XXXXXXXXX</p></div>
            <div><img src="/images/invertir.png" /><p>Invertí en nosotros: XXXXXX</p></div>
          </div>
        </div>
        <div className={styles.footer_rights}>
          <p>All&nbsp;rights&nbsp;reserved&nbsp;&copy; 2023&nbsp;-&nbsp;Gustavo&nbsp;Dev</p>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
