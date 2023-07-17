import styles from "./inputControl.module.css";

const InputControl = (props) => {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </div>
  );
};

export default InputControl;
