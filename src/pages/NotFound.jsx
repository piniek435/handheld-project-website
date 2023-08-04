import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Błąd 404</h1>
      <h2>Strona której szukasz nie istnieje</h2>
    </div>
  );
}
