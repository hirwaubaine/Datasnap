import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ onClose }) => {
const [submitted, setSubmitted] = useState(false);

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_badyqvr', 'template_yztps0d', form.current, 'Eq5KTvCzQOs1Vw0xH')
    .then((result) => {
      console.log(result.text);
      console.log("message sent");

      setSubmitted(true);
    })
    .catch((error) => {
      console.error(error.text);
    });
};

  return (
    <div className="ContactPopup">
      <div className="Contact">
        <div className="ContactTitle">
          <h1>Contactez-nous</h1>
          <span onClick={onClose}>X</span>
        </div>
        {submitted ? (
          <div className="success-message">
            <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
            <button className="CloseButton" onClick={onClose}>
              Fermer
            </button>
          </div>
        ) : (
          <form className="ContactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Votre Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Votre Message"
              name="message"
              required
            ></textarea>
            <button type="submit" value="Send">Envoyer</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;