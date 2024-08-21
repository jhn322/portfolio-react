import { useState, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { RxExternalLink, RxCheck } from "react-icons/rx";
import "../styles/Contact.css";

const Contact = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({ visible: true, message: "Please fill in all fields." });
      return;
    }

    try {
      const emailjs = await import("@emailjs/browser");

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const emailParams = {
        from_name: formData.name,
        to_name: "Johan",
        message: formData.message,
        from_email: formData.email,
      };

      await emailjs.send(serviceId, templateId, emailParams, publicKey);
      setNotification({ visible: true, message: "Message sent successfully!" });
    } catch (error) {
      setNotification({
        visible: true,
        message: "Failed to send message, please try again.",
      });
      console.error("EmailJS error:", error);
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (notification.visible) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification.visible]);

  return (
    <div className="contactContainer">
      <section id="contact">
        <div ref={headerRef}>
          <header className={`headline ${isHeaderVisible ? "fadeIn" : ""}`}>
            <h2>Contact Me</h2>
            <p className="main">Get in touch with me</p>
          </header>
        </div>
        <main className="innerInfo">
          <article className="infoContainer">
            <h3 className="infoTitle">My Information</h3>
            <address>
              <ul className="infoList">
                <li className="infoItem">
                  <span className="label">Address:</span>
                  <span className="value">Umeå, Sweden</span>
                </li>
                <li className="infoItem">
                  <span className="label">Email:</span>
                  <span
                    className="value email"
                    onClick={() =>
                      (window.location.href =
                        "mailto:johan.soderlund96@gmail.com")
                    }
                  >
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
            </address>
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
                aria-label="Your Name"
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
                aria-label="Your Email"
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
                aria-label="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="contactBtn">
              Send Message
            </button>
          </form>
          {notification.visible && (
            <div
              className={`notification ${notification.visible ? "show" : ""}`}
              role="alert"
            >
              <span className="notificationMessage">
                {notification.message}
              </span>
              <span className="checkmark">
                <RxCheck className="checkmarkIcon" />
              </span>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default Contact;
