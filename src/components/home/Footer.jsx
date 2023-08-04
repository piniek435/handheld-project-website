import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.bgDarkest} />
      <div className={styles.footer}>
        <div>
          <h2>PlayJet</h2>
          <h3>Unlock the Power of Fun</h3>
        </div>
        <p>
          PlayJet SA
          <br />
          ul. Ćwiartki 3/4
          <br /> Warszawa, Polska
          <br /> 00-215
        </p>
      </div>
      <p className={styles.copyright}>© 2023 PlayJet SA. Wszelkie prawa zastrzeżone.</p>
    </>
  );
}
