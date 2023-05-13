import styles from "../styles/menu.module.css"
import { useState } from "react"
import foodData from "../data/menu.json"

function Menu() {

  const [comida, setComida] = useState("Menu");


  return (
    <div className={styles.menu_grid}>
      <div className={styles.menu_header}>
        <h2>Nuestro Menu!</h2>
        <div>
          <p>Filtrar:</p>
          <div className={styles.menu_options}>
            <div className={ comida === "Menu" ? `${styles.active}` : "" } onClick={() => setComida("Menu")}>Menu Completo</div>
            <div className={ comida === "Entrada" ? `${styles.active}` : "" } onClick={() => setComida("Entrada")}>Entradas</div>
            <div className={ comida === "Principal" ? `${styles.active}` : "" } onClick={() => setComida("Principal")}>Principal</div>
            <div className={ comida === "Postre" ? `${styles.active}` : "" } onClick={() => setComida("Postre")}>Postres</div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
          { comida === "Menu" ? foodData.map((food,i) => 
            <div className={styles.menu_card} key={i}>
              <img src={food.image} />
              <div className={styles.text}>
                  <h2>{food.titulo}</h2>
                  <h5>{food.precio}</h5>
                  <p>{food.descripcion}</p>
              </div>
            </div>
          ) 
            : foodData.filter(food => food.categoria === comida).map((filteredFood,i) =>(
              <div className={styles.menu_card} key={i}>
                <img src={filteredFood.image} />
                <div className={styles.text}>
                    <h2>{filteredFood.titulo}</h2>
                    <h5>{filteredFood.precio}</h5>
                    <p>{filteredFood.descripcion}</p>
                </div>
            </div>
            ))
          }
      </div>
    </div>
  )
}

export default Menu
