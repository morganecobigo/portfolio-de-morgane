import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./contact.css";

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Remplacez par votre Service ID
        "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID
        formData,
        "YOUR_USER_ID" // Remplacez par votre Public Key (User ID)
      )
      .then(
        (response) => {
          console.log(
            "Email envoyé avec succès!",
            response.status,
            response.text
          );
          alert("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email:", error);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div id={id} className="contact">
      <div className="contact_phrase">
        <h3>Démarrons un projet ensemble, n'hésitez pas à me contacter.</h3>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Me contacter</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
