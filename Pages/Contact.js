import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // Success message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Show success message
    setSubmitted(true);

    // Clear form fields
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container">
      {/* Success Message Above the Form */}
      {submitted && (
        <div className="success-message">
          🎉 Thanks for reaching out! We'll get back to you soon.
        </div>
      )}

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get in Touch</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">
          <i className="fas fa-paper-plane"></i> Send Message
        </button>
      </form>

      {/* Contact Info Below */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          <i className="fas fa-map-marker-alt"></i> 123 Hotel Street, Chennai,
          Tamil Nadu
        </p>
        <p>
          <i className="fas fa-phone"></i> +91 9834567210
        </p>
        <p>
          <i className="fas fa-envelope"></i> support@gmail.com
        </p>
        <p>
          <i className="fas fa-clock"></i> Mon-Sun : 8AM-10PM
        </p>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
