import React from "react";
import styles from "./WhatsButton.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const WhatsButton = () => {
  return (
    <a
      href="https://wa.me/123456789"
      className={styles.whatsButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsButton;
