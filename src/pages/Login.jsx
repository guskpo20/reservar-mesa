import {useRef, useState, useEffect, useContext} from "react"
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css"
import axios from "../api/axios";
import { setToken } from "../helpers/aut-helpers";

const EMAILREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGISTER_URL = "/user/signin"

function Login() {
  let navigateTo = useNavigate();
  const errRef = useRef();
  const [user, setUser] = useState("")

  const [pwd, setPwd] = useState("")

  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    return () => {
      setErrMsg("")
    };
  }, [user, pwd])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const userValid = EMAILREGEX.test(user);
    const pswValid = pwd.length > 8;

    if(!userValid){
      setErrMsg("Ingrese un mail valido")
      setPwd("")
      setUser("")
      return
    }

    if(!pswValid){
      setErrMsg("Contraseña invalida, minimo 8 caracteres")
      setPwd("")
      setUser("")
      return
    }

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({email: user, password: pwd,}),{
        headers: { 
          "Content-Type" : "application/json",
          'Accept': 'application/json',
        },
        origin: true
        }
      )
      if(response.data.status === "Failed"){
        setErrMsg("Credenciales invalidas")
        setPwd("")
        setUser("")
        return
      }
      const accessToken = response?.data?.token
      navigateTo('/')
      setToken(accessToken)
      setPwd("")
      setUser("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles.login_section}>
      <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `styles.offscreen`} aria-live="assertive">{errMsg}</p>
      <h3> Inicia sesion </h3>
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
        <label htmlFor="password">
          Contraseña:
        </label>
        <input 
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          />
        <button>Iniciar Sesion</button>
      </form>
      <br/>
      <p>
        No tienes cuenta? <br/>
        <Link to="/register">Registrate</Link>
      </p>
      <p>
        Olvidaste la contraseña? <br/>
        <Link to="/forgot">Resetear contraseña</Link>
      </p>
    </section>
  )
}

export default Login
