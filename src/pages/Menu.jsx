import styles from "../styles/menu.module.css"
import { useState } from "react"
import foodData from "../data/menu.json"


function Menu() {

  const [comida, setComida] = useState(0);
  console.log(foodData[0].titulo)
  return (
    <>
      <div className={styles.menu_header}>
        <h2>Nuestro Menu!</h2>
        <div>
          <p>Filtrar:</p>
          <div className={styles.menu_options}>
            <div onClick={() => setComida(0)}>Menu Completo</div>
            <div onClick={() => setComida(1)}>Entradas</div>
            <div onClick={() => setComida(2)}>Principal</div>
            <div onClick={() => setComida(3)}>Postres</div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
          {comida == 0 ? 
            foodData.map((food,i) => 
              <div className={styles.menu_card} key={i}>
                <img src={food.image} />
                <div className={styles.text}>
                  <h2>{food.titulo}</h2>
                  <h5>{food.precio}</h5>
                  <p>{food.descripcion}</p>
                </div>
              </div>
            ) : ""
          }
          
      </div>
    </>
  )
}

export default Menu
