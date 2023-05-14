import { useState, useEffect} from "react"
import { Link } from "react-router-dom";
import styles from "../styles/login.module.css"
import axios from "../api/axios";
const EMAILREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGISTER_URL = "/user/forgot"
function Forgot() {
  const [user, setUser] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [successMsg, setSuccessMsgMsg] = useState("")

  useEffect(() => {
    return () => {
      setErrMsg("")
    };
  }, [user])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const userValid = EMAILREGEX.test(user);

    if(!userValid){
        setSuccessMsgMsg("")
      setErrMsg("Ingrese un mail valido")
      return
    }

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({email: user}),{
        headers: { 
          "Content-Type" : "application/json",
          'Accept': 'application/json',
        },
        origin: true
        }
      )
      setSuccessMsgMsg("El email ha sido enviado!")
      //borrar fields
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles.login_section}>
      <p className={errMsg ? `${styles.errmsg}` : `styles.offscreen`} aria-live="assertive">{errMsg}</p>
      <p className={successMsg ? `${styles.successmsg}` : `styles.offscreen`} aria-live="assertive">{successMsg}</p>
      <h3> Recuperar contraseña </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Email:
        </label>
        <input 
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          />
        <button>Obtener nueva contraseña!</button>
      </form>
      <br/>
      <p>
        No tienes cuenta? <br/>
        <Link to="/register">Registrate</Link>
      </p>
      <p>
        Si te acuerdas tus credenciales <br/>
        <Link to="/login">Inicia sesion</Link>
      </p>
    </section>
  )
}

export default Forgot
