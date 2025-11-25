import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  TextField,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import Button from "./Button.js";
import "./Contact.css";
import { init, send } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

// Initialize EmailJS with your public key
init(process.env.REACT_APP_EMAILJS_USER_ID);

const Contact = () => {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
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
      setIsSubmitting(true);
      
      try {
        // Get reCAPTCHA token
        const token = recaptchaRef.current?.getValue();
        
        if (!token) {
          console.warn('⚠️ Please complete the reCAPTCHA');
          setErrors({ ...errors, recaptcha: "Please complete the reCAPTCHA" });
          setIsSubmitting(false);
          return;
        }

        console.log('✅ reCAPTCHA token obtained');

        // Prepare email data
        const emailData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          'g-recaptcha-response': token,
        };

        console.log('📧 Attempting to send email with reCAPTCHA...');
        
        const response = await send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          emailData
        );

        console.log('📬 EmailJS Response:', response);

        if (response.status === 200) {
          console.log("✅ Form submitted successfully!");
          setShowSuccess(true);
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          setErrors({});
          // Reset reCAPTCHA
          recaptchaRef.current?.reset();
        } else {
          console.error("❌ Error sending email - Status:", response.status, "Response:", response);
          setShowError(true);
          // Reset reCAPTCHA on error
          recaptchaRef.current?.reset();
        }
      } catch (error) {
        console.error("❌ Error sending email - Full error details:");
        console.error("Error message:", error.message);
        console.error("Error text:", error.text);
        console.error("Error object:", error);
        setShowError(true);
        // Reset reCAPTCHA on error
        recaptchaRef.current?.reset();
      } finally {
        setIsSubmitting(false);
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

  const handleCalendarClick = () => {
    const calendarLink = process.env.REACT_APP_GOOGLE_CALENDAR_LINK;
    if (calendarLink) {
      window.open(calendarLink, "_blank");
    } else {
      console.error("Google Calendar link not configured");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Section - Schedule Consultation */}
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="contact-main-title">Schedule a Free Consultation</h1>
            <p className="contact-description">
              Ready to explore Spanish real estate with confidence? Whether you're 
              buying your first property in Spain, selling remotely, or looking to 
              maximize an existing investment, we're here to guide you through 
              every step.
            </p>
            <Button
              onClick={handleCalendarClick}
              variant="primary"
              style="filled"
            >
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="contact-form-title">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <Stack spacing={2.5}>
                <div className="contact-name-row">
                  <TextField
                    fullWidth
                    label="First Name*"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'transparent',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2C3E50',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Last Name*"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'transparent',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2C3E50',
                        },
                      },
                    }}
                  />
                </div>

                <TextField
                  fullWidth
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2C3E50',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2C3E50',
                      },
                    },
                  }}
                />

                {/* reCAPTCHA v2 */}
                {process.env.REACT_APP_RECAPTCHA_SITE_KEY && (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={() => {
                      // Clear reCAPTCHA error when user completes it
                      if (errors.recaptcha) {
                        setErrors((prev) => ({ ...prev, recaptcha: "" }));
                      }
                    }}
                  />
                )}
                {errors.recaptcha && (
                  <p style={{ color: '#d32f2f', fontSize: '0.75rem', margin: '0' }}>
                    {errors.recaptcha}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="secondary"
                  style="filled"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Connect with us"}
                </Button>
              </Stack>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Notification */}
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

      {/* Error Notification */}
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Oops! There was an error sending your message. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
