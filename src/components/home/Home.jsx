import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./home.module.css";

function salir() {
  return auth.signOut();
  navigate("/");
}
const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.containerText}>
          <h1 className={styles.heading}>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </h1>
          <br />
          <h1 className={styles.heading}>
            <Link className={styles.link} to="signup">
              SignUp
            </Link>
          </h1>
        </div>
        <div className={styles.containerSugerencia}>
          <h2 className={styles.sugerencia}>
            {props.name ? `Bienvenido - ${props.name}` : "Iniciar sesión"}
          </h2>
          <button onClick={salir} className={styles.btnSalir}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
