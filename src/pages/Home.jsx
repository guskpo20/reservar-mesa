import styles from "../styles/home.module.css"

function Home() {
  return (
    <section className={styles.home}>
        <div className={styles.home_main}>
          <h2 className={styles.home_main_title}>Bienvenido a nuevos sabores!</h2>
          <h4 className={styles.home_sub_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem earum aperiam, dignissimos porro hic.</h4>
          <p className={styles.home_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio sit placeat vel quae molestiae ex nisi voluptas, adipisci ut facere itaque quasi, incidunt at minima in animi numquam repellat!</p>
        </div>
    </section>
  )
}

export default Home;
