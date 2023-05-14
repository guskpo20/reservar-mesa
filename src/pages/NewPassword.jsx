import { useState, useEffect} from "react"
import { Link, useSearchParams } from "react-router-dom";
import styles from "../styles/login.module.css"
import axios from "../api/axios";


function NewPassword() {
    const [pass, setPass] = useState("")
    const [confirm, setConfirm] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsgMsg] = useState("")
    const [queryParameters] = useSearchParams()

    const id = queryParameters.get("id")
    const string = queryParameters.get("string")
    const AXIOS_URL = `/user/forgot/${id}/${string}`

    console.log(AXIOS_URL)

    useEffect(() => {
        return () => {
          setErrMsg("")
        };
      }, [pass])

      const handleSubmit = async (e) =>{
        e.preventDefault()

        if(pass.length <= 7){
            setSuccessMsgMsg("")
          setErrMsg("La contrseña debe tener al menos 8 caracteres")
          return
        }

        if( pass != confirm){
            setSuccessMsgMsg("")
          setErrMsg("La contrseñas deben de coincidir")
          return
        }
    
        try {
          const response = await axios.post(AXIOS_URL, JSON.stringify({newPassword: pass}),{
            headers: { 
              "Content-Type" : "application/json",
              'Accept': 'application/json',
            },
            origin: true
            }
          )
          setSuccessMsgMsg("La contraseña ha sido cambiada!")
          //borrar fields
        } catch (error) {
          console.log(error)
        }
      }


    return (
    <section className={styles.login_section}>
    <p className={errMsg ? `${styles.errmsg}` : `styles.offscreen`} aria-live="assertive">{errMsg}</p>
    <p className={successMsg ? `${styles.successmsg}` : `styles.offscreen`} aria-live="assertive">{successMsg}</p>
    <h3> Nueva contraseña </h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">
        Contraseña: 
      </label>
      <input 
        type="password"
        id="password"
        autoComplete="off"
        onChange={(e) => setPass(e.target.value)}
        required
        />
        <label htmlFor="confPassword">
        Confirmar Contraseña:
      </label>
      <input 
        type="password"
        id="confPassword"
        autoComplete="off"
        onChange={(e) => setConfirm(e.target.value)}
        required
        />
      <button>Cambiar contraseña!</button>
    </form>
    <br/>
  </section>
  )
}

export default NewPassword
