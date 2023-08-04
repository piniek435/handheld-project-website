import styles from "./FormSuccess.module.css";
import success from "../assets/success.json";
import Lottie from "lottie-react";

export default function FormSuccess() {
  return (
    <div className={styles.success}>
      <h1 className={styles.header}>Wiadomość wysłana!</h1>
      <Lottie animationData={success} style={{ width: 512 }} loop={false} />
    </div>
  );
}
