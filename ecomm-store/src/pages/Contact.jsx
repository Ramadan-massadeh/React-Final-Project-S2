import "./Contact.css";
import { toast } from "react-toastify";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h2>📩 Contact Us</h2>
      <p>
        We’d love to hear from you! Fill out the form and we’ll get back to you
        soon.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Your email" required />
        </label>

        <label>
          Message
          <textarea rows="5" placeholder="Your message..." required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {/* ====== Google Map ====== */}
      <div className="map-container">
        <h3>📍 Our Location</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1670.036382480709!2d-52.71271994852459!3d47.56137754078856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x482b24dd26fc1c4d%3A0xc083ef73807e0c25!2sSt.%20John's%2C%20NL!5e0!3m2!1sen!2sca!4v1648857634390!5m2!1sen!2sca"
          width="100%"
          height="300"
          style={{ border: 0, marginTop: "2rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
