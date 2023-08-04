import styles from "./Details.module.css";
import details2 from "../../assets/details2.svg";
import checkmarkDetails from "../../assets/checkmarkDetails.svg";

export default function Details({ paymentStatus, data, orderId }) {
  // console.log(paymentStatus, data);
  return (
    <div className={styles.details}>
      <h1>Zamówienie</h1>
      <h2>ID zamówienia - {orderId}</h2>
      <div className={styles.explainWrap}>
        {paymentStatus == "paid" && <img src={details2} />}
        {paymentStatus == "paid" ? (
          <div className={styles.explain}>
            <p>Zamówienie przyjęte</p>
            <p>Zamówienie opłacone</p>
            <p style={{ paddingLeft: "0.8rem" }}>Zamówienie wysłane</p>
            <p style={{ paddingLeft: "1rem" }}>Zamówienie odebrane</p>
          </div>
        ) : (
          <h1>Błąd płatności</h1>
        )}
      </div>
      <div className={styles.explainWrapSmall}>
        {paymentStatus == "paid" ? (
          <div className={styles.explain}>
            <img src={checkmarkDetails} />
            <h1>Zamówienie opłacone</h1>
          </div>
        ) : (
          <h1>Błąd płatności</h1>
        )}
      </div>
      <div className={styles.orderDetails}>
        <h3>Detale</h3>
        <div className={styles.columns}>
          <div className={styles.columnWrapper}>
            <div>
              <strong>Produkt</strong>
              <p>Konsola PlayJet One</p>
              <br />
            </div>
            <div>
              <strong>Wariant</strong>
              <p>{data.color}</p>
              <br />
            </div>
            <div>
              <strong>Produkt</strong>
              <p>{data.delivery}</p>
              <br />
            </div>
            <div>
              <strong>Produkt</strong>
              <p>1999zł</p>
            </div>
          </div>
          <div className={styles.columnWrapper}>
            <div>
              <strong>Imię</strong>
              <p>{data.name}</p>
              <br />
            </div>
            <div>
              <strong>Nazwisko</strong>
              <p>{data.surname}</p>
              <br />
            </div>
            <div>
              <strong>Telefon</strong>
              <p>{data.phone}</p>
              <br />
            </div>
            <div>
              <strong>E-Mail</strong>
              <p>{data.mail}</p>
              <br />
            </div>
          </div>
          <div>
            <div>
              <strong>Adres zamieszkania</strong>
              <p>{data.address}</p>
              <br />
            </div>
            <div>
              <strong>Kod pocztowy</strong>
              <p>{data.postal}</p>
              <br />
            </div>
            <div>
              <strong>Miasto</strong>
              <p>{data.city}</p>
              <br />
            </div>
            <div>
              <strong>Sposób płatności</strong>
              <p>{data.payment}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
