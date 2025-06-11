import { motion } from "framer-motion";
import { useState } from "react";
import {
  TextField,
  Stack,
  Typography,
  Box,
  Alert,
  Snackbar,
} from "@mui/material";
import "./Contact.css";
import { init, send } from "emailjs-com";

// Initialize EmailJS with your public key
init(process.env.REACT_APP_EMAILJS_USER_ID);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        );

        if (response.status === 200) {
          console.log("Form submitted:", formData);
          setShowSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Error sending email:", response);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-header no-wrap">Contact Us</h1>

        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #000",
            borderRadius: 2,
            boxShadow: 1,
            p: { xs: 2, sm: 3, md: 4 },
          }}
          className="contact-box"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="h4" sx={{ mb: 1 }} className="contact-title">
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "text.secondary" }}
              className="contact-subtitle"
            >
              We'd love to hear from you!
            </Typography>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                variant="outlined"
              />

              <button type="submit" className="secondary">
                <p style={{ marginRight: "1rem" }}>Get Connected</p>
                <i className="fa fa-paper-plane"></i>
              </button>
            </Stack>
          </motion.form>
        </Box>
      </div>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Thanks! We'll get back to you ASAP.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
