import styles from "./FeatureMobile.module.css";
import render1 from "../../assets/render1.webp";
import render2 from "../../assets/render2.webp";
import render3 from "../../assets/render3.webp";
import render4 from "../../assets/render4.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Feature({ isChromium }) {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Text content
  const display1 = useTransform(scrollYProgress, (pos) => {
    return pos < 0.3 ? "block" : "none";
  });
  const x1 = useTransform(scrollYProgress, [0.25, 0.3], ["0px", "10%"]);
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.3], ["100%", "0%"]);

  const display2 = useTransform(scrollYProgress, (pos) => {
    // console.log(pos);
    return pos > 0.3 && pos < 0.45 ? "block" : "none";
  });

  const x2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], ["-20%", "0%", "0%", "20%"]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], ["0%", "100%", "100%", "0%"]);
  const opacity2Img = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], ["0%", "100%", "100%", "100%"]);

  const display3 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.45 && pos < 0.6 ? "block" : "none";
  });
  const x3 = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], ["-20%", "0%", "0%", "20%"]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], ["0%", "100%", "100%", "0%"]);
  const opacity3Img = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.55], ["0%", "100%", "100%", "100%"]);
  const display4 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.6 ? "block" : "none";
  });
  const x4 = useTransform(scrollYProgress, [0.6, 0.65], ["-20%", "0%"]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.65], ["0%", "100%"]);

  const x = useTransform(scrollYProgress, [0.25, 0.3], ["-16%", "-16%"]);
  const y = useTransform(scrollYProgress, [0.25, 0.3], ["2%", "2%"]);
  const scale = useTransform(scrollYProgress, [0.25, 0.3], ["0.7", "0.7"]);

  // Sticky header
  const position = useTransform(scrollYProgress, (pos) => {
    return pos < 0 ? "sticky" : "sticky";
  });

  // Gradient
  const xGradient = useTransform(scrollYProgress, [0.25, 0.3], ["-20rem", "-20rem"]);
  const hueGradient = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.3) return "hue-rotate(0deg) blur(20px)";
    else if (pos > 0.3 && pos < 0.45) return "hue-rotate(-10deg) blur(20px)";
    else if (pos > 0.45 && pos < 0.6) return "hue-rotate(20deg) blur(20px)";
    else return "hue-rotate(10deg) blur(20px)";
  });
  const scaleGradient = useTransform(scrollYProgress, [1, 2, 2], ["0.5", "0.9", "0.5"]);

  return (
    <motion.section ref={targetRef} className={styles.feature}>
      <motion.div className={styles.wrapper} style={{ position }}>
        <div className={styles.text}>
          <h1 className={styles.header}>Funkcje</h1>
          <motion.p style={{ display: display1, x: x1, opacity: opacity1 }}>/Wydajność</motion.p>
          <motion.p style={{ display: display2, x: x2, opacity: opacity2 }}>/System</motion.p>
          <motion.p style={{ display: display3, x: x3, opacity: opacity3 }}>/Ekran</motion.p>
          <motion.p style={{ display: display4, x: x4, opacity: opacity4 }}>/Bateria</motion.p>
        </div>
        <div className={styles.main}>
          <motion.p style={{ display: display1, x: x1, opacity: opacity1 }} className={styles.mainText}>
            PlayJet One wyróżnia się imponującą wydajnością dzięki zastosowaniu potężnego procesora oraz szybkiej pamięci GDDR5. Procesor <strong>AMD Ryzen</strong> o wysokiej mocy obliczeniowej zapewnia płynne działanie, szybkie ładowanie i płynność w wymagających grach.
          </motion.p>
          <motion.p style={{ display: display2, x: x2, opacity: opacity2 }} className={styles.mainTextWide}>
            System operacyjny <strong>Windows 11</strong> jest nowoczesny i intuicyjny w obsłudze. Wyposażony w zaawansowane funkcje i optymalizacje, zapewnia płynność działania, szybkie uruchamianie aplikacji i gier oraz łatwą nawigację po interfejsie zapewniając przy tym szeroką kompatybilnością
            m. in. ze Steam i Xbox Game Pass.
          </motion.p>
          <motion.p style={{ display: display3, x: x3, opacity: opacity3 }} className={styles.mainTextWide}>
            Ekran <strong>IPS 120Hz</strong> jest imponujący i zapewnia wysoką jakość obrazu. Wyposażony w zaawansowaną technologię, wyświetla obrazy w pełnych detalach, żywych kolorach i doskonałej ostrości. Bez względu na to, czy oglądasz filmy, przeglądasz strony internetowe czy grasz w gry,
            ekran ten zapewnia niesamowite wrażenia wizualne, które ożywiają treści na ekranie.
          </motion.p>
          <motion.p style={{ display: display4, x: x4, opacity: opacity4 }} className={styles.mainTextWide}>
            <strong style={{ textTransform: "none" }}>BATERIA 5600mAh</strong> pozwala na długi czas działania na jednym ładowaniu pozwala na korzystanie z urządzenia przez dłuższy czas bez potrzeby częstego ładowania. Dzięki temu możesz spokojnie korzystać z produktu w podróży, w pracy czy w czasie
            rozrywki, bez obaw o wyczerpanie baterii.
          </motion.p>
          <motion.img className={styles.imgFirst} style={{ x, y, scale, position: `relative` }} src={render1} alt="Game console with game screenshot on screen"></motion.img>
          <motion.img style={{ x, y, scale, opacity: opacity2Img, position: `absolute`, zIndex: 1 }} src={render2} alt="Game console with Windows 11 screenshot on screen"></motion.img>
          <motion.img style={{ x, y, scale, opacity: opacity3Img, position: `absolute`, zIndex: 2 }} src={render3} alt="Game console with vivid colors on screen"></motion.img>
          <motion.img style={{ x, y, scale, opacity: opacity4, position: `absolute`, zIndex: 3 }} src={render4} alt="Game console with plane wing on screen"></motion.img>
          <motion.svg style={isChromium ? { x: xGradient, scaleGradient, filter: hueGradient } : { x: xGradient, scaleGradient, filter: "blur(20px) hue-rotate(10deg)" }} className={styles.gradient} xmlns="http://www.w3.org/2000/svg" width="1392" height="1346" viewBox="0 0 1392 1346" fill="none">
            <g filter="url(#filter0_f_38_15)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M643.118 400.39C722.802 404.885 778.522 470.203 837.412 524.072C900.695 581.959 998.097 632.918 990.733 718.366C983.406 803.377 878.057 835.228 806.579 881.827C755.71 914.991 703.835 944.067 643.118 944.989C581.359 945.927 518.421 930.412 474.615 886.869C430.698 843.215 422.928 779.795 415.127 718.366C405.619 643.502 381.617 562.168 425.59 500.839C473.97 433.364 560.223 395.713 643.118 400.39Z"
                fill="#7E5EF2"
              />
            </g>
            <defs>
              <filter id="filter0_f_38_15" x="0" y="0" width="1391.13" height="1345.03" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_38_15" />
              </filter>
            </defs>
          </motion.svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
