
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  Email,
  ArrowOutward,
  ArrowForward,
  CloseRounded,
} from "@mui/icons-material";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type Notification = {
  type: "success" | "error";
  message: string;
} | null;

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000";

const socialLinks = [
  {
    label: "GitHub",
    description: "Explore my projects",
    href: "https://github.com/Lishanaik11",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/",
    icon: LinkedIn,
  },
  {
    label: "Email",
    description: "Let's talk directly",
    href: "mailto:lishanaik11@gmail.com",
    icon: Email,
  },
];

const fieldStyles = {
  "& .MuiInputLabel-root": {
    color: "#c4c4c4",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#d7b0ff",
  },
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
    borderRadius: "13px",
    backgroundColor: "rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.25)",
    },
    "&:hover fieldset": {
      borderColor: "#b45cff",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(180,92,255,0.08)",
      boxShadow: "0 0 20px rgba(180,92,255,0.12)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c58aff",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#b0b0b0",
    opacity: 1,
  },
  "& .MuiInputBase-input": {
    color: "#ffffff",
  },
  "& .MuiFormLabel-asterisk": {
    color: "#d7aaff",
  },
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<Notification>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    const cleanForm = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (
      !cleanForm.name ||
      !cleanForm.email ||
      !cleanForm.subject ||
      !cleanForm.message
    ) {
      setNotification({
        type: "error",
        message: "Please fill in all the fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanForm.email)) {
      setNotification({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanForm),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

   setForm(initialForm);
setSuccessOpen(true);
    } catch (error) {
      setNotification({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#101010] px-6 py-24 md:px-12 md:py-28 lg:px-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-purple-700/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              mb: 4,
              borderRadius: "30px",
              border: "1px solid rgba(180,92,255,0.3)",
              background: "rgba(180,92,255,0.08)",
            }}
          >
            <Email sx={{ color: "#c58aff", fontSize: 16 }} />
            <Typography
              sx={{
                color: "#d5aaff",
                fontSize: "11px",
                letterSpacing: "2.5px",
              }}
            >
              ( 06 — GET IN TOUCH )
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#fff",
              fontFamily: '"Times New Roman", serif',
              fontSize: {
                xs: "43px",
                sm: "58px",
                md: "76px",
              },
              lineHeight: 1.12,
              mb: 3,
            }}
          >
            Let's create something
            <br />
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                background:
                  "linear-gradient(100deg, #dcbaff, #a34de0, #edbaff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              amazing together.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#999",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.9,
              maxWidth: "620px",
              mb: { xs: 7, md: 10 },
            }}
          >
            Have an opportunity, project idea, or simply want to say hello?
            I'm always happy to connect and explore new possibilities.
          </Typography>
        </motion.div>

        {/* Contact Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 1.15fr",
            },
            gap: { xs: 4, md: 5 },
            alignItems: "stretch",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, sm: 4 },
                borderRadius: "24px",
                background:
                  "linear-gradient(145deg, #261a32 0%, #1b1720 55%, #151515 100%)",
                border: "1px solid rgba(180,92,255,0.23)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circles */}
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  border: "1px solid rgba(180,92,255,0.12)",
                  borderRadius: "50%",
                  top: -115,
                  right: -105,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: 155,
                  height: 155,
                  border: "1px solid rgba(180,92,255,0.12)",
                  borderRadius: "50%",
                  top: -80,
                  right: -72,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "17px",
                    background: "rgba(180,92,255,0.15)",
                    border: "1px solid rgba(180,92,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                 <Email sx={{ color: "#d7b0ff", fontSize: 27 }} />
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "27px",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  Let's connect
                </Typography>

                <Typography
                  sx={{
                    color: "#aaa",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    mb: 5,
                  }}
                >
                 I'm always open to new opportunities, from full-time roles to freelance projects and creative collaborations. If you're looking for someone who's eager to learn, build, and grow, feel free to drop me a message. I'll be happy to hear from you!
                </Typography>

                <Typography
                  sx={{
                    color: "#c5a0e8",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    mb: 2,
                  }}
                >
                  FIND ME ON
                </Typography>

                <Box sx={{ display: "grid", gap: 2 }}>
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.label === "Email" ? undefined : "_blank"}
                        rel={
                          item.label === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.25 }}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 2,
                            borderRadius: "15px",
                            background: "rgba(255,255,255,0.07)",
border: "1px solid rgba(255,255,255,0.14)",
                            transition: "0.3s",
                            "&:hover": {
                              background: "rgba(180,92,255,0.09)",
                              borderColor: "rgba(180,92,255,0.5)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 47,
                              height: 47,
                              flexShrink: 0,
                              borderRadius: "13px",
                              background: "rgba(180,92,255,0.15)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              sx={{ color: "#d1a2ff", fontSize: 24 }}
                            />
                          </Box>

                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: 600,
                              }}
                            >
                              {item.label}
                            </Typography>

                            <Typography
                              sx={{
                                color: "#999",
                                fontSize: "12px",
                                mt: 0.5,
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>

                          <ArrowOutward
                            sx={{ color: "#b58bd4", fontSize: 19 }}
                          />
                        </Box>
                      </motion.a>
                    );
                  })}
                </Box>
              </Box>

              <Box sx={{ mt: "auto", pt: 5, position: "relative", zIndex: 1 }}>
                <Divider
                  sx={{
                    borderColor: "rgba(255,255,255,0.1)",
                    mb: 3,
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      bgcolor: "#8ee6a5",
                      boxShadow: "0 0 12px rgba(142,230,165,0.6)",
                    }}
                  />

                  <Typography sx={{ color: "#ddd", fontSize: "13px" }}>
                    Open to opportunities
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                height: "100%",
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: "24px",
                background: "rgba(32,29,36,0.98)",
border: "1px solid rgba(180,92,255,0.22)",
                boxShadow: "0 20px 70px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "25px", md: "29px" },
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Send me a message
              </Typography>

              <Typography
                sx={{
                  color: "#999",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Fill out the form and I'll get back to you as soon as possible.
              </Typography>

              {/* Honeypot */}
              <Box
                sx={{
                  position: "absolute",
                  left: "-10000px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
                aria-hidden="true"
              >
                <TextField
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </Box>

              <Box sx={{ display: "grid", gap: 2.5 }}>
                {/* Name and Email */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 1fr",
                    },
                    gap: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    slotProps={{
                      htmlInput: { maxLength: 80 },
                    }}
                    sx={fieldStyles}
                  />

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    slotProps={{
                      htmlInput: { maxLength: 254 },
                    }}
                    sx={fieldStyles}
                  />
                </Box>

                {/* Subject */}
                <TextField
                  fullWidth
                  required
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  slotProps={{
                    htmlInput: { maxLength: 120 },
                  }}
                  sx={fieldStyles}
                />

                {/* Message */}
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={6}
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  slotProps={{
                    htmlInput: { maxLength: 3000 },
                  }}
                  sx={fieldStyles}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  endIcon={
                    loading ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : (
                      <ArrowForward />
                    )
                  }
                  sx={{
                    py: 1.9,
                    px: 3,
                    mt: 1,
                    borderRadius: "13px",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#fff",
                    background:
                      "linear-gradient(100deg, #8733c9, #b45cff)",
                    boxShadow: "0 8px 30px rgba(180,92,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(100deg, #a34ce8, #c58aff)",
                      boxShadow: "0 12px 35px rgba(180,92,255,0.3)",
                      transform: "translateY(-3px)",
                    },
                    "&.Mui-disabled": {
                      color: "#ddd",
                      background: "#63358a",
                    },
                  }}
                >
                  {loading ? "Sending your message..." : "Send Message"}
                </Button>

                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "12px",
                    textAlign: "center",
                    mt: 0.5,
                  }}
                >
                  <Email
                    sx={{
                      fontSize: 14,
                      verticalAlign: "middle",
                      mr: 0.7,
                    }}
                  />
                  Your message will be delivered directly to my inbox.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: { xs: 8, md: 11 },
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#888", fontSize: "13px" }}>
            © {new Date().getFullYear()} Lisha Naik. All rights reserved.
          </Typography>

          <Typography sx={{ color: "#888", fontSize: "13px" }}>
            Designed & developed with care.
          </Typography>
        </Box>
      </div>

 
{/* Premium Success Dialog */}
<Dialog
  open={successOpen}
  onClose={() => setSuccessOpen(false)}
  maxWidth="xs"
  fullWidth
  slotProps={{
    backdrop: {
      sx: {
        backgroundColor: "rgba(5, 3, 10, 0.78)",
        backdropFilter: "blur(10px)",
      },
    },
    paper: {
      sx: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "26px",
        background:
          "linear-gradient(145deg, #21152d 0%, #17121e 55%, #121016 100%)",
        border: "1px solid rgba(190,130,255,0.25)",
        boxShadow:
          "0 30px 100px rgba(0,0,0,0.65), 0 0 45px rgba(150,70,220,0.12)",
        m: 2,
      },
    },
  }}
>
  {/* Background Glow */}
  <Box
    sx={{
      position: "absolute",
      width: 230,
      height: 230,
      borderRadius: "50%",
      background: "rgba(153,75,220,0.13)",
      filter: "blur(75px)",
      top: -125,
      left: "50%",
      transform: "translateX(-50%)",
      pointerEvents: "none",
    }}
  />

  {/* Close Button */}
  <Button
    onClick={() => setSuccessOpen(false)}
    aria-label="Close success popup"
    sx={{
      position: "absolute",
      top: 16,
      right: 16,
      minWidth: 35,
      width: 35,
      height: 35,
      borderRadius: "50%",
      color: "#aaa",
      background: "rgba(255,255,255,0.06)",
      zIndex: 2,
      "&:hover": {
        color: "#fff",
        background: "rgba(255,255,255,0.13)",
      },
    }}
  >
    <CloseRounded fontSize="small" />
  </Button>

  <DialogContent
    sx={{
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      px: { xs: 3, sm: 4 },
      pt: 6,
      pb: 2,
    }}
  >
    {/* Animated Tick - Without Circle */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 13,
      }}
    >
      <Box
        sx={{
          color: "#d5a4ff",
          fontSize: "66px",
          fontWeight: 400,
          lineHeight: 1,
          mb: 3,
          textShadow: "0 0 25px rgba(180,92,255,0.5)",
        }}
      >
        ✓
      </Box>
    </motion.div>

    {/* Status Label */}
    <Typography
      sx={{
        color: "#c58aff",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "3.5px",
        mb: 2,
      }}
    >
      MESSAGE DELIVERED
    </Typography>

    {/* Heading */}
    <Typography
      sx={{
        color: "#fff",
        fontFamily: '"Times New Roman", serif',
        fontSize: { xs: "35px", sm: "40px" },
        fontWeight: 500,
        lineHeight: 1.15,
        mb: 2,
      }}
    >
      Thank you for
      <Box
        component="span"
        sx={{
          display: "block",
          fontStyle: "italic",
          background:
            "linear-gradient(100deg, #e1c1ff, #ad69e9, #f0c9ff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        reaching out!
      </Box>
    </Typography>

    {/* Description */}
    <Typography
      sx={{
        color: "#aaa1b5",
        fontSize: "13.5px",
        lineHeight: 1.9,
        maxWidth: 310,
        mx: "auto",
        mb: 3.5,
      }}
    >
      Your message has been successfully sent. Thank you for taking the time
      to connect with me. I'll get back to you as soon as possible.
    </Typography>

    {/* Delivery Status */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.2,
        py: 1.7,
        px: 2,
        borderRadius: "13px",
        background: "rgba(255,255,255,0.045)",
        border: "1px solid rgba(255,255,255,0.08)",
        mb: 1,
      }}
    >
      <Email sx={{ color: "#c58aff", fontSize: 19 }} />

      <Typography
        sx={{
          color: "#d1c6dc",
          fontSize: "12px",
        }}
      >
        Message received successfully
      </Typography>
    </Box>
  </DialogContent>

  {/* Action Button */}
  <DialogActions
    sx={{
      px: { xs: 3, sm: 4 },
      pt: 1.5,
      pb: 4,
    }}
  >
    <Button
      onClick={() => setSuccessOpen(false)}
      fullWidth
      endIcon={<ArrowForward />}
      sx={{
        py: 1.7,
        borderRadius: "13px",
        textTransform: "none",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.3px",
        color: "#fff",
        background:
          "linear-gradient(105deg, #8132bd 0%, #a34de0 55%, #bd72f2 100%)",
        boxShadow: "0 8px 28px rgba(160,75,220,0.24)",
        transition: "all 0.3s ease",
        "&:hover": {
          background:
            "linear-gradient(105deg, #9844d4 0%, #b565ef 100%)",
          boxShadow: "0 12px 35px rgba(160,75,220,0.38)",
          transform: "translateY(-2px)",
        },
      }}
    >
      Back to Portfolio
    </Button>
  </DialogActions>
</Dialog>


      {/* Notification */}
      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={5000}
        onClose={() => setNotification(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {notification ? (
          <Alert
            onClose={() => setNotification(null)}
            severity={notification.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </section>
  );
}
