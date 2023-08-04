import styles from "./ContactForm.module.css";
import useInput from "../../utils/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm({ isFirefox }) {
  const { value: enteredName, reset: resetNameInput, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler } = useInput((value) => value.trim() !== "");

  const { value: enteredMail, reset: resetMailInput, isValid: enteredMailIsValid, hasError: mailInputHasError, valueChangeHandler: mailChangeHandler, inputBlurHandler: mailBlurHandler } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const { value: enteredContent, reset: resetContentInput, isValid: enteredContentIsValid, hasError: contentInputHasError, valueChangeHandler: contentChangeHandler, inputBlurHandler: contentBlurHandler } = useInput((value) => value.trim() !== "");

  const { value: enteredSurname, reset: resetSurnameInput, isValid: enteredSurnameIsValid, hasError: surnameInputHasError, valueChangeHandler: surnameChangeHandler, inputBlurHandler: surnameBlurHandler } = useInput((value) => value.trim() !== "");

  const { value: selectedReason, reset: resetReasonInput, isValid: selectedReasonIsValid, hasError: reasonInputHasError, valueChangeHandler: reasonChangeHandler, inputBlurHandler: reasonBlurHandler } = useInput((value) => value.trim() !== "");

  const formIsValid = enteredNameIsValid && enteredMailIsValid && enteredContentIsValid && enteredSurnameIsValid && selectedReasonIsValid;

  const navigate = useNavigate();
  const textFieldErrorClasses = `${styles.errorIndicatorText} ${styles.errorIndicator}`;
  const [isHovering, setIsHovering] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    setUploading(true);
    try {
      await addDoc(collection(db, "formData"), {
        name: enteredName,
        surname: enteredSurname,
        mail: enteredMail,
        category: selectedReason,
        content: enteredContent,
      });
      navigate("/success");
    } catch (err) {
      setFailedMessage(err.toString());
      console.error(err);
    }
    setUploading(false);
  };

  const nameInputClasses = nameInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredNameIsValid ? styles.filled : ""}`;
  const mailInputClasses = mailInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredMailIsValid ? styles.filled : ""}`;
  const contentInputClasses = contentInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredContentIsValid ? styles.filled : ""}`;
  const surnameInputClasses = surnameInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${enteredSurnameIsValid ? styles.filled : ""}`;
  const reasonInputClasses = reasonInputHasError ? `${styles.inputContainer} ${styles.content} ${styles.invalid}` : `${styles.inputContainer} ${styles.content} ${selectedReasonIsValid ? styles.filled : ""}`;

  return (
    <div>
      <h2 className={styles.header}>Daj nam znać, jak możemy Ci pomóc!</h2>
      <form className={styles.form} onSubmit={formSubmissionHandler}>
        <div className={styles.column}>
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
          <div className={mailInputClasses}>
            <label className={styles.label} htmlFor="email">
              Adres E-mail
            </label>
            <input type="email" id="email" onChange={mailChangeHandler} onBlur={mailBlurHandler} value={enteredMail} />
            {mailInputHasError && <p className={styles.errorIndicator}>Błędny adres e-mail</p>}
          </div>
          <div className={reasonInputClasses}>
            <label className={styles.label} htmlFor="reason">
              Kategoria
            </label>
            <select id="reason" onChange={reasonChangeHandler} onBlur={reasonBlurHandler} value={selectedReason}>
              <option value="">Wybierz kategorię</option>
              <option value="warranty">Reklamacje</option>
              <option value="order">Zamówienia</option>
              <option value="co-op">Współpraca</option>
            </select>
            {reasonInputHasError && <p className={styles.errorIndicator}>Wybierz kategorię</p>}
          </div>
        </div>
        <div className={styles.column}>
          <div className={contentInputClasses}>
            <label className={styles.label} htmlFor="content">
              Treść
            </label>
            <textarea type="content" id="content" onChange={contentChangeHandler} onBlur={contentBlurHandler} value={enteredContent} />
            {contentInputHasError && <p className={textFieldErrorClasses}>Pole nie może być puste</p>}
          </div>
          {!uploading &&
            (!isFirefox ? (
              <button disabled={!formIsValid} className={isHovering ? styles.btn : styles["btn--hover"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <span>KUP TERAZ</span>
              </button>
            ) : (
              <button disabled={!formIsValid} className={isHovering ? styles.btnFirefox : styles["btn--hoverFirefox"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <span>KUP TERAZ</span>
              </button>
            ))}
        </div>
      </form>
      {failedMessage !== "" ? <p className={styles.error}>Wystąpił błąd! ({failedMessage})</p> : ""}
    </div>
  );
}
