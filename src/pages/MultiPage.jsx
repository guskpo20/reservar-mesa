import { Link } from "react-router-dom";
import styles from "../styles/register.module.css"

export default function MultiPage(props) {
    const { title, message } = props;
  return (
    <div>
        <section className={styles.succes_section}>
            <h3>{title} </h3>
            <p>{message}</p>
            <Link to="/login">Identificarse</Link>
        </section>
    </div>
  )
}
