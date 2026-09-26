import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";

  const message = "Hello, I want to know more about your services.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <button
      className="whatsapp-button"
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;