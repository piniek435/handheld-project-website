import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Checkout.module.css";
import parcel from "../../assets/parcel.svg";
import payPal from "../../assets/payPal.svg";
import blik from "../../assets/blik.png";
import bank from "../../assets/bank.svg";
import card from "../../assets/card.svg";
import CheckoutForm from "./CheckoutForm";
import top from "../../assets/renderBlack/black_top.webp";
import topB from "../../assets/renderBlue/blue_top.webp";
import topW from "../../assets/renderWhite/white_top.webp";

export default function Checkout({ isFirefox }) {
  const [searchParams] = useSearchParams();
  const color = searchParams.get("color");
  const navigate = useNavigate();

  useEffect(() => {
    if (color === null) {
      navigate("/store");
    }
  }, [color, navigate]);

  // Parcel
  const [selectedParcel, setSelectedParcel] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const selectedParcelClasses = `${styles.parcel} ${styles.parcelSelected}`;
  const selectedPaymentClasses = `${styles.payment} ${styles.paymentSelected}`;

  const onClickParcel = function (parcel) {
    setSelectedParcel(parcel);
  };
  const onClickPayment = function (payment) {
    setSelectedPayment(payment);
  };

  const colorImg = function () {
    if (color === "Czarny") return `${top}`;
    if (color === "Biały") return `${topW}`;
    if (color === "Niebieski") return `${topB}`;
  };

  return (
    <div className={styles.checkout}>
      <div>
        <div className={styles.text}>
          <p className={styles.header}>1</p>
          <h1 style={{ marginLeft: "1.8rem" }}>/Metoda wysyłki</h1>
        </div>
        <div className={styles.parcels}>
          <div onClick={() => onClickParcel("DPD")} className={selectedParcel === "DPD" ? selectedParcelClasses : styles.parcel}>
            <img src={parcel} />
            <h3>DPD</h3>
            <p>2 dni robocze</p>
            <svg />
          </div>
          <div onClick={() => onClickParcel("DHL")} className={selectedParcel === "DHL" ? selectedParcelClasses : styles.parcel}>
            <img src={parcel} />
            <h3>DHL</h3>
            <p>2 dni robocze</p>
            <svg />
          </div>
          <div onClick={() => onClickParcel("Pocztex")} className={selectedParcel === "Pocztex" ? selectedParcelClasses : styles.parcel}>
            <img src={parcel} />
            <h3>Pocztex</h3>
            <p>2 dni robocze</p>
            <svg />
          </div>
        </div>
        <div style={{ marginTop: "6.2rem" }} className={styles.text}>
          <p className={styles.header}>2</p>
          <h1>/Dane do wysyłki</h1>
        </div>
        <CheckoutForm parcel={selectedParcel} payment={selectedPayment} color={color} isFirefox={isFirefox} />
        <div style={{ marginTop: "6.2rem" }} className={styles.text}>
          <p className={styles.header}>3</p>
          <h1>/Sposób płatności</h1>
        </div>
        <div className={styles.payments}>
          <div onClick={() => onClickPayment("card")} className={selectedPayment === "card" ? selectedPaymentClasses : styles.payment}>
            <img src={card} />
            <h3>Karta płatnicza</h3>
            <svg />
          </div>
          <div onClick={() => onClickPayment("paypal")} className={selectedPayment === "paypal" ? selectedPaymentClasses : styles.payment}>
            <img style={{ position: "relative", top: "2px" }} src={payPal} />
            <h3>PayPal</h3>
            <svg />
          </div>
          <div onClick={() => onClickPayment("blik")} className={selectedPayment === "blik" ? selectedPaymentClasses : styles.payment}>
            <img src={blik} style={{ width: 12, height: 18, marginRight: "2.2rem" }} />
            <h3>Blik</h3>
            <svg />
          </div>
          <div onClick={() => onClickPayment("p24")} className={selectedPayment === "p24" ? selectedPaymentClasses : styles.payment}>
            <img src={bank} />
            <h3>Przelewy 24</h3>
            <svg />
          </div>
        </div>
      </div>
      <div className={styles.cart}>
        <h3>Zamówienie</h3>
        <img src={colorImg()} />
        <div>
          <p>1x PlayJet One ({color})</p>
          <p style={{ fontWeight: 700 }}>1999zł</p>
        </div>
        <div>
          <p>Wysyłka</p>
          <p style={{ fontWeight: 700 }}>0zł</p>
        </div>
        <div>
          <p>Do zapłaty</p>
          <p style={{ fontWeight: 700 }}>1999zł</p>
        </div>
      </div>
    </div>
  );
}
