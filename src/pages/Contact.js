import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">Contact Us</h1>
      <div className="page-content">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
