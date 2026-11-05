
import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  Psychology,
  Insights,
  Groups,
  Bolt,
  FactCheck,
  MenuBook,
} from "@mui/icons-material";

const strengths = [
  {
    title: "Problem-Solving",
    description: "Finding practical solutions to technical challenges.",
    icon: <Psychology />,
  },
  {
    title: "Analytical Thinking",
    description: "Understanding problems and approaching them logically.",
    icon: <Insights />,
  },
  {
    title: "Team Collaboration",
    description: "Working effectively with others to achieve shared goals.",
    icon: <Groups />,
  },
  {
    title: "Adaptability",
    description: "Learning new technologies and adapting to new challenges.",
    icon: <Bolt />,
  },
  {
    title: "Attention to Detail",
    description: "Maintaining accuracy, quality, and clean implementation.",
    icon: <FactCheck />,
  },
  {
    title: "Continuous Learning",
    description: "Improving my knowledge and exploring new technologies.",
    icon: <MenuBook />,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#111] px-7 md:px-16 lg:px-20 py-24 md:py-28 overflow-hidden"
    >
      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-purple-300 tracking-[0.4em] text-xs md:text-sm mb-10"
      >
        ( 01 — ABOUT ME )
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-5xl"
      >
        Building digital
        <br />
        <span className="italic text-purple-300">experiences</span>{" "}
        through code
        <br />
        & creativity.
      </motion.h2>

      {/* Introduction and Photograph */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-14 lg:gap-20 mt-20 items-start">

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl space-y-7"
        >
          {/* Introduction */}
          <p className="text-gray-100 text-xl md:text-2xl leading-[1.8]">
            I'm{" "}
            <strong className="text-purple-300 font-bold">
              Lisha Naik
            </strong>
            , a{" "}
            <strong className="text-white font-bold">
              Full Stack Developer
            </strong>{" "}
            and BCA student specializing in Full Stack Development. I'm
            passionate about building practical, user-focused web applications
            using{" "}
            <strong className="text-purple-300 font-bold">
              React.js, JavaScript, Node.js, and Express.js
            </strong>
            .
          </p>

          {/* Development Experience */}
          <p className="text-gray-100 text-lg md:text-xl leading-[1.9]">
            My work involves developing responsive frontend interfaces,
            building REST APIs, implementing authentication flows, and
            integrating databases using{" "}
            <strong className="text-white font-bold">
              SQL and PostgreSQL
            </strong>
            . I enjoy working across the development stack, focusing on clean
            code, maintainable architecture, and seamless user experiences.
          </p>

          {/* Problem Solving */}
          <p className="text-gray-100 text-lg md:text-xl leading-[1.9]">
            I enjoy solving technical challenges, transforming ideas into
            functional applications, and continuously exploring new
            technologies. Through hands-on projects and internship experiences,
            I've been developing a stronger understanding of real-world
            software development and collaborative workflows.
          </p>

          {/* Career Goals */}
          <p className="text-gray-100 text-lg md:text-xl leading-[1.9]">
            I'm looking forward to contributing to meaningful projects,
            growing as a developer, and working with teams where I can apply
            my technical knowledge, take on new challenges, and create
            impactful digital solutions.
          </p>

          {/* Core Strengths - Material UI */}
          <Box sx={{ pt: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                sx={{
                  color: "#c084fc",
                  fontSize: "12px",
                  letterSpacing: "0.35em",
                  mb: 1.5,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                WHAT I BRING TO THE TABLE
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: { xs: "32px", md: "40px" },
                  color: "#fff",
                  mb: 3.5,
                  lineHeight: 1.2,
                }}
              >
                Core{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#d8b4fe",
                    fontStyle: "italic",
                  }}
                >
                  Strengths
                </Box>
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
              }}
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      minHeight: 145,
                      backgroundColor: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: "14px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(168,85,247,0.09)",
                        borderColor: "rgba(192,132,252,0.65)",
                        boxShadow:
                          "0 8px 30px rgba(168,85,247,0.10)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 2.5,
                        "&:last-child": {
                          pb: 2.5,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          mb: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#c084fc",
                            "& svg": {
                              fontSize: 27,
                            },
                          }}
                        >
                          {strength.icon}
                        </Box>

                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: {
                              xs: "15px",
                              md: "16px",
                            },
                            fontWeight: 600,
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          {strength.title}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          color: "#bdbdc5",
                          fontSize: "13px",
                          lineHeight: 1.8,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        {strength.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Profile Photograph */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-start self-start"
        >
          {/* Decorative Frame */}
          <div className="absolute w-[280px] h-[350px] md:w-[340px] md:h-[430px] border border-purple-400/40 rounded-t-full rounded-b-[180px] rotate-6" />

          {/* Photograph */}
          <motion.div
            whileHover={{ scale: 1.025, rotate: -1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[260px] h-[340px] md:w-[320px] md:h-[410px] overflow-hidden rounded-t-full rounded-b-[160px] border border-white/20 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          >
            <img
              //src="/lisha.jpeg"
              //src="/Lishapfp.jpeg"
              src="/lisha1.jpeg"
              alt="Lisha Naik"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Decorative Animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 md:right-0 top-10 text-4xl text-purple-300"
          >
            ✳
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
