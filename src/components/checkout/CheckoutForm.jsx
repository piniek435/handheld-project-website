import styles from "./CheckoutForm.module.css";
import useInput from "../../utils/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, paymentHandler, redirectPayment } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CheckoutForm({ parcel, payment, color, isFirefox }) {
  const { value: enteredName, reset: resetNameInput, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler } = useInput((value) => value.trim() !== "");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { value: enteredMail, reset: resetMailInput, isValid: enteredMailIsValid, hasError: mailInputHasError, valueChangeHandler: mailChangeHandler, inputBlurHandler: mailBlurHandler } = useInput((value) => value.trim() !== "" && value.match(emailPattern));

  const { value: enteredSurname, reset: resetSurnameInput, isValid: enteredSurnameIsValid, hasError: surnameInputHasError, valueChangeHandler: surnameChangeHandler, inputBlurHandler: surnameBlurHandler } = useInput((value) => value.trim() !== "");

  const { value: enteredPhoneNumber, reset: resetPhoneNumberInput, isValid: enteredPhoneNumberIsValid, hasError: phoneNumberInputHasError, valueChangeHandler: phoneNumberChangeHandler, inputBlurHandler: phoneNumberBlurHandler } = useInput((value) => value.trim().length >= 9);

  const { value: enteredAddress, reset: resetAddressInput, isValid: enteredAddressIsValid, hasError: addressInputHasError, valueChangeHandler: addressChangeHandler, inputBlurHandler: addressBlurHandler } = useInput((value) => value.trim() !== "");

  const postalCodePattern = /^[0-9]{2}-[0-9]{3}$/;
  const { value: enteredPostalCode, reset: resetPostalCodeInput, isValid: enteredPostalCodeIsValid, hasError: postalCodeInputHasError, valueChangeHandler: postalCodeChangeHandler, inputBlurHandler: postalCodeBlurHandler } = useInput((value) => value.trim() !== "" && value.match(postalCodePattern));

  const { value: enteredCity, reset: resetCityInput, isValid: enteredCityIsValid, hasError: cityInputHasError, valueChangeHandler: cityChangeHandler, inputBlurHandler: cityBlurHandler } = useInput((value) => value.trim() !== "");

  const formIsValid = enteredNameIsValid && enteredMailIsValid && enteredPhoneNumberIsValid && enteredSurnameIsValid && enteredAddressIsValid && enteredPostalCodeIsValid && enteredCityIsValid && parcel !== "" && payment !== "";
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();
  // const [isHovering, setIsHovering] = useState(false);
  // const [failedMessage, setFailedMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    setUploading(true);
    const sessionId = await paymentHandler(payment, color);
    console.log(sessionId);
    if (!formIsValid) return;
    const formInputsData = {
      name: enteredName,
      surname: enteredSurname,
      phone: Number(enteredPhoneNumber),
      mail: enteredMail,
      address: enteredAddress,
      postal: enteredPostalCode,
      city: enteredCity,
      delivery: parcel,
      payment: payment,
      color: color,
      sessionId: sessionId,
    };
    try {
      console.log(formInputsData);
      const docRef = await addDoc(collection(db, "checkoutData"), formInputsData);
      const documentId = docRef.id;
      localStorage.setItem("documentId", documentId);
    } catch (err) {
      setFailedMessage(err.toString());
      console.error(err);
    }
    setUploading(false);
    redirectPayment();
  };

  const nameInputClasses = nameInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredNameIsValid ? styles.filled : ""}`;
  const mailInputClasses = mailInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredMailIsValid ? styles.filled : ""}`;
  const surnameInputClasses = surnameInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredSurnameIsValid ? styles.filled : ""}`;
  const phoneNumberInputClasses = phoneNumberInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredPhoneNumberIsValid ? styles.filled : ""}`;
  const addressInputClasses = addressInputHasError ? `${styles.inputContainer} ${styles.address} ${styles.invalid}` : `${styles.inputContainer} ${styles.address} ${enteredAddressIsValid ? styles.filled : ""}`;
  const postalCodeInputClasses = postalCodeInputHasError ? `${styles.inputContainer} ${styles.postal} ${styles.invalid}` : `${styles.inputContainer} ${styles.postal} ${enteredPostalCodeIsValid ? styles.filled : ""}`;
  const cityInputClasses = cityInputHasError ? `${styles.inputContainer} ${styles.city} ${styles.invalid}` : `${styles.inputContainer} ${styles.city} ${enteredCityIsValid ? styles.filled : ""}`;

  const addressErrorClasses = `${styles.errorIndicator} ${styles.errorIndicatorAddress}`;
  const postalCodeErrorClasses = `${styles.errorIndicator} ${styles.errorIndicatorPostalCode}`;
  const cityCodeErrorClasses = `${styles.errorIndicator} ${styles.errorIndicatorCity}`;

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmissionHandler}>
        <div className={styles.grid}>
          <div className={nameInputClasses}>
            <label className={styles.label} htmlFor="name">
              Imię
            </label>
            <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
            {nameInputHasError && <p className={styles.errorIndicator}>Pole nie może być puste</p>}
          </div>
          <div className={surnameInputClasses}>
            <label className={styles.label} htmlFor="surname">
              Nazwisko
            </label>
            <input type="text" id="surname" onChange={surnameChangeHandler} onBlur={surnameBlurHandler} value={enteredSurname} />
            {surnameInputHasError && <p className={styles.errorIndicator}>Pole nie może być puste</p>}
          </div>
          <div className={phoneNumberInputClasses}>
            <label className={styles.label} htmlFor="phoneNumber">
              Numer Telefonu
            </label>
            <input type="number" id="phoneNumber" onChange={phoneNumberChangeHandler} onBlur={phoneNumberBlurHandler} value={enteredPhoneNumber} />
            {phoneNumberInputHasError && <p className={styles.errorIndicator}>Błędny numer telefonu</p>}
          </div>
          <div className={mailInputClasses}>
            <label className={styles.label} htmlFor="email">
              Adres E-mail
            </label>
            <input type="email" id="email" onChange={mailChangeHandler} onBlur={mailBlurHandler} value={enteredMail} />
            {mailInputHasError && <p className={styles.errorIndicator}>Błędny adres e-mail</p>}
          </div>
          <div className={addressInputClasses}>
            <label className={styles.label} htmlFor="address">
              Adres zamieszkania
            </label>
            <input type="text" id="address" onChange={addressChangeHandler} onBlur={addressBlurHandler} value={enteredAddress} />
            {addressInputHasError && <p className={addressErrorClasses}>Pole nie może być puste</p>}
          </div>
          <div className={styles.lastContainer}>
            <div className={postalCodeInputClasses}>
              <label className={styles.label} htmlFor="postalCode">
                Kod pocztowy
              </label>
              <input type="text" id="postalCode" onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler} value={enteredPostalCode} />
              {postalCodeInputHasError && <p className={postalCodeErrorClasses}>Błędny kod</p>}
            </div>
            <div className={cityInputClasses}>
              <label className={styles.label} htmlFor="city">
                Miasto
              </label>
              <input type="text" id="city" onChange={cityChangeHandler} onBlur={cityBlurHandler} value={enteredCity} />
              {cityInputHasError && <p className={cityCodeErrorClasses}>Pole nie może być puste</p>}
            </div>
          </div>
        </div>
        {!uploading ? (
          !isFirefox ? (
            <button disabled={!formIsValid} className={isHovering ? styles.btn : styles["btn--hover"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <span>KUP TERAZ</span>
            </button>
          ) : (
            <button disabled={!formIsValid} className={isHovering ? styles.btnFirefox : styles["btn--hoverFirefox"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <span>KUP TERAZ</span>
            </button>
          )
        ) : (
          ""
        )}
      </form>
      <div className={styles.info}>
        {failedMessage !== "" ? <p className={styles.error}>Wystąpił błąd! ({failedMessage})</p> : ""}
        {uploading ? <p className={styles.loading}>Proszę czekać...</p> : ""}
      </div>
    </div>
  );
}
