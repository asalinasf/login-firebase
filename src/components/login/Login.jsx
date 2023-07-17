import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Loguearse = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          type="email"
          placeholder="Ingresa tu correo"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Loguearse} disabled={submitButtonDisabled}>
            Login
          </button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup"> Ir</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
