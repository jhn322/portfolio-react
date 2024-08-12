import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RxExternalLink } from "react-icons/rx";
import "../styles/Contact.css";

const handleEmailClick = () => {
  window.location.href = `mailto:"johan.soderlund96@gmail.com"`;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const emailParams = {
      from_name: formData.name,
      to_name: "Johan",
      message: formData.message,
      from_email: formData.email,
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message, please try again.");
        console.error("EmailJS error:", error);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="aboutMe">
        <h2>Contact Me</h2>
        <p className="main">Get in touch with me</p>
      </div>
      <article className="infoContainer">
        <h3 className="infoTitle">My Information</h3>
        <ul className="infoList">
          <li className="infoItem">
            <span className="label">Adress:</span>
            <span className="value">Umeå, Sweden</span>
          </li>
          <li className="infoItem">
            <span className="label">Email:</span>
            <span className="value email" onClick={handleEmailClick}>
              johan.soderlund96@gmail.com
              <RxExternalLink
                style={{ marginLeft: "0.5rem", verticalAlign: "middle" }}
              />
            </span>
          </li>
          <li className="infoItem">
            <span className="label">Phone:</span>
            <span className="value">073 - 029 33 92</span>
          </li>
        </ul>
      </article>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="btnContainer">
          <button type="submit" className="contactBtn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
