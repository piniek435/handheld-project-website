import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styles from "./Counter.module.css";

export default function Counter({ from = 0, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 0.5,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p className={styles.columnHeader} ref={nodeRef} />;
}
