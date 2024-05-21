import styles from "./Features.module.css";
import windows from "../../assets/windows.svg";
import battery from "../../assets/battery.svg";
import cpu from "../../assets/cpu.svg";
import screen from "../../assets/screen.svg";

export default function Features() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.features}>
        <div className={styles.feature}>
          <img src={windows} alt="Windows logo" />
          <div>
            <h3>Windows 11</h3>
            <p>Najnowsza wersja zapewnia wysoką wydajność oraz dostęp do szerokiej gamy gier i aplikacji.</p>
          </div>
        </div>
        <div className={styles.feature}>
          <img src={cpu} alt="Processor icon" />
          <div>
            <h3>AMD Ryzen</h3>
            <p>
              Maksymalna wydajność przy <br />
              niskim poborze energii pozwoli <br />
              uruchomić każdą grę.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <img src={screen} alt="Screen icon" />
          <div>
            <h3>Ekran IPS 120 Hz</h3>
            <p>Doskonała jakość obrazu i płynność animacji, zapewniają imponujące wrażenia wizualne.</p>
          </div>
        </div>
        <div className={styles.feature}>
          <img src={battery} alt="Battery icon" />
          <div>
            <h3>Bateria 5600mAh</h3>
            <p>Długi czas pracy na baterii pozwoli Ci zanurzyć się w rozrywce nawet do 5 godzin.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
