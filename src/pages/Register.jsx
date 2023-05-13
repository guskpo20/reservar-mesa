import {useRef, useState, useEffect} from "react"
import { Link } from "react-router-dom";
import axios from "../api/axios";
import styles from "../styles/register.module.css"

const EMAILREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGISTER_URL = "/user/signup"

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const [user, setUser] = useState("")
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState("")
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    return () => {
      const current = userRef.current || ""
      try {
        current.focus();
      } catch (error) {
        console.log(error)
      }
      
    };
  }, [])


  useEffect(() => {
    return () => {
      const result = EMAILREGEX.test(user)
      setValidName(result)
    };
  }, [user])


  useEffect(() => {
    return () => {
      const result = pwd.length > 7;
      setValidPwd(result)
      const match = (pwd === matchPwd);
      setValidMatch(match)
    };
  }, [pwd,matchPwd])


  useEffect(() => {
    return () => {
      setErrMsg("")
    };
  }, [user, pwd, matchPwd])


  const handleSubmit = async (e) =>{
    e.preventDefault()
    const userValid = EMAILREGEX.test(user);
    const pswValid = pwd.length > 8;
    if( pwd != matchPwd ){
      setValidMatch(false)
      setErrMsg("Contraseña y Confirmar Contraseña no son iguales")
      return
    }
    if( !userValid || !pswValid){
      setErrMsg("Entrada invalida")
      return
    }
    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({email: user, password: pwd, name, phone}),{
        headers: { 
          "Content-Type" : "application/json",
          'Accept': 'application/json',
        },
        origin: true
        }
      )
      console.log(JSON.stringify(response))
      setSuccess(true)
      //borrar fields
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      {success ? (
        <section className={styles.succes_section}>
          <h3>Usuario registrado correctamente!</h3>
          <p>En tu casilla de correo recibiras un link para confirmar la cuenta.</p>
        </section>
      ): (
      <section className={styles.register_section}>
        <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `styles.offscreen`} aria-live="assertive">{errMsg}</p>
        <h3> Registrarse </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            *Email:
          </label>
          <input 
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            />
          <p id="uidnote" className={userFocus && user && !validName ? `${styles.instructions}` : `${styles.offscreen}`}>
            Insertar un email valido!
          </p>
          <label htmlFor="password">
            *Contraseña:
          </label>
          <input 
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            />
          <p id="pwdnote" className={pwdFocus && !validPwd ? `${styles.instructions}` : `${styles.offscreen}`}>
            Minimo 8 letras!
          </p>
          <label htmlFor="confirm_psd">
            *Confirmar Contraseña:
          </label>
          <input 
            type="password"
            id="confirm_psd"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            />
          <label htmlFor="name">
            Nombre:
          </label>
          <input 
            type="text"
            id="name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            />
          <label htmlFor="phone">
            Celular:
          </label>
          <input 
            type="text"
            id="phone"
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09XXXXXXX"
          />

          <button>Registrarse</button>
        </form>
        <p>Los campos señalados con * son obligatorios</p>
        <br/>
        <p>
          Ya tienes cuenta? <br/>
          <Link to="/login">Identificarse</Link>
        </p>
      </section>
      )}
    </>
  )
}

export default Login
