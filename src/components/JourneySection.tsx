
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import {
  Database,
  Code,
  CalendarDays,
  MapPin,
  ArrowDown,
} from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Lotus Funds",
    period: "January 2026 – Present",
    type: "Project-Based · Hybrid",
    color: "#38bdf8",
    icon: <Code size={25} />,
    description:
      "Contributing to real-world web application development, working across frontend, backend, API integration, and application improvements.",
    responsibilities: [
      "Developed frontend and backend features for real-world web applications.",
      "Built responsive user interfaces and integrated REST APIs.",
      "Worked on internal tools, automation scripts, and dashboard development.",
      "Collaborated with mentors and team members in an agile development environment.",
      "Participated in testing, debugging, documentation, and performance optimization.",
      "Contributed to UI/UX improvements and workflow enhancements.",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "CSS",
      "Node.js",
      "Express.js",
      "REST API",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    role: "Data Mining Executive",
    company: "Dialogues Media",
    period: "November 2025 – December 2025",
    type: "Online Internship",
    color: "#c084fc",
    icon: <Database size={25} />,
    description:
      "Worked on data collection and research activities, helping gather business information and connect with business owners.",
    responsibilities: [
      "Collected and organized business data.",
      "Conducted online research and data gathering.",
      "Contacted business owners to collect information.",
    ],
    technologies: [
      "Data Collection",
      "Online Research",
      "Data Management",
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function JourneySection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111] px-7 py-24 md:px-16 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-xs tracking-[0.4em] text-purple-300 md:text-sm"
        >
          ( 03 — MY JOURNEY )
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
            My professional
            <br />
            <span className="italic text-purple-300">
              journey so far.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Every experience is a step forward. Here's where
            I've learned, explored, and grown as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Animated Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "absolute",
              left: 17,
              top: 25,
              bottom: 50,
              width: "2px",
              background:
                "linear-gradient(to bottom, #38bdf8, #c084fc, transparent)",
              opacity: 0.7,
              transformOrigin: "top",
            }}
            className="md:!left-[27px]"
          />

          <div className="space-y-12">

            {experiences.map((experience, index) => {
              const isExpanded =
                isDesktop || expanded === index;

              return (
                <motion.div
                  key={experience.company}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="relative pl-12 md:pl-20"
                >

                  {/* Animated Timeline Dot */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 10px ${experience.color}40`,
                        `0 0 25px ${experience.color}90`,
                        `0 0 10px ${experience.color}40`,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      left: 7,
                      top: 30,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      backgroundColor: "#111",
                      border: `3px solid ${experience.color}`,
                      zIndex: 2,
                    }}
                    className="md:!left-[17px]"
                  />

                  {/* Experience Card */}
                  <Card
                    onClick={() => {
                      if (!isDesktop) {
                        setExpanded(
                          expanded === index ? null : index
                        );
                      }
                    }}
                    elevation={0}
                    sx={{
                      cursor: isDesktop ? "default" : "pointer",
                      overflow: "hidden",
                      backgroundColor: isExpanded
                        ? "#201b29"
                        : "#181818",
                      border: "1px solid",
                      borderColor: isExpanded
                        ? experience.color
                        : "rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        borderColor: experience.color,
                        boxShadow: `0 12px 35px ${experience.color}20`,
                      },
                    }}
                  >
                    {/* Top Accent */}
                    <Box
                      sx={{
                        height: 4,
                        backgroundColor: experience.color,
                      }}
                    />

                    <CardContent
                      sx={{ p: { xs: 3, md: 4.5 } }}
                    >

                      {/* Role and Company */}
                      <div className="flex flex-wrap items-start justify-between gap-5">

                        <div className="flex items-start gap-4">

                          <Box
                            sx={{
                              width: 55,
                              height: 55,
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "15px",
                              color: experience.color,
                              backgroundColor: `${experience.color}18`,
                            }}
                          >
                            {experience.icon}
                          </Box>

                          <div>
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: {
                                  xs: "20px",
                                  md: "25px",
                                },
                                fontWeight: 600,
                                lineHeight: 1.4,
                              }}
                            >
                              {experience.role}
                            </Typography>

                            <Typography
                              sx={{
                                color: experience.color,
                                fontSize: "16px",
                                mt: 0.5,
                              }}
                            >
                              {experience.company}
                            </Typography>
                          </div>

                        </div>

                        <Chip
                          label={experience.type}
                          variant="outlined"
                          sx={{
                            color: experience.color,
                            borderColor: `${experience.color}60`,
                            backgroundColor: `${experience.color}10`,
                          }}
                        />

                      </div>

                      {/* Date and Work Mode */}
                      <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <CalendarDays size={16} />
                          {experience.period}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin size={16} />
                          {experience.type.includes("Online")
                            ? "Online"
                            : "Hybrid"}
                        </div>

                      </div>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: "#aaa",
                          fontSize: "15px",
                          lineHeight: 1.8,
                          mt: 3,
                          maxWidth: "850px",
                        }}
                      >
                        {experience.description}
                      </Typography>

                      {/* Expandable Details */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="experience-details"
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: 20,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              y: -10,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <Box
                              sx={{
                                mt: 4,
                                pt: 3,
                                borderTop:
                                  "1px solid rgba(255,255,255,0.1)",
                              }}
                            >

                              {/* Responsibilities */}
                              <Typography
                                sx={{
                                  color: experience.color,
                                  fontSize: "12px",
                                  letterSpacing: "2px",
                                  mb: 2,
                                }}
                              >
                                KEY RESPONSIBILITIES
                              </Typography>

                              <ul className="space-y-3">
                                {experience.responsibilities.map(
                                  (item, itemIndex) => (
                                    <motion.li
                                      key={item}
                                      initial={{
                                        opacity: 0,
                                        x: -15,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        duration: 0.4,
                                        delay: itemIndex * 0.07,
                                      }}
                                      className="flex gap-3 text-sm leading-relaxed text-gray-300"
                                    >
                                      <span
                                        style={{
                                          color: experience.color,
                                        }}
                                      >
                                        ✳
                                      </span>
                                      {item}
                                    </motion.li>
                                  )
                                )}
                              </ul>

                              {/* Technologies */}
                              <Typography
                                sx={{
                                  color: experience.color,
                                  fontSize: "12px",
                                  letterSpacing: "2px",
                                  mt: 4,
                                  mb: 2,
                                }}
                              >
                                TECHNOLOGIES & SKILLS
                              </Typography>

                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map(
                                  (technology, techIndex) => (
                                    <motion.div
                                      key={technology}
                                      initial={{
                                        opacity: 0,
                                        scale: 0.85,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        scale: 1,
                                      }}
                                      transition={{
                                        duration: 0.3,
                                        delay: techIndex * 0.04,
                                      }}
                                    >
                                      <Chip
                                        label={technology}
                                        size="small"
                                        sx={{
                                          color: "#ddd",
                                          border: `1px solid ${experience.color}50`,
                                          backgroundColor: `${experience.color}10`,
                                          transition: "all 0.25s ease",
                                          "&:hover": {
                                            color: "#fff",
                                            backgroundColor: `${experience.color}30`,
                                            borderColor: experience.color,
                                          },
                                        }}
                                      />
                                    </motion.div>
                                  )
                                )}
                              </div>

                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile Expand Button */}
                      {!isDesktop && (
                        <div
                          className="mt-6 flex items-center gap-2 text-xs tracking-widest"
                          style={{ color: experience.color }}
                        >
                          {isExpanded
                            ? "SHOW LESS"
                            : "EXPLORE EXPERIENCE"}

                          <motion.span
                            animate={{
                              rotate: isExpanded ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowDown size={15} />
                          </motion.span>
                        </div>
                      )}

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-sm tracking-wide text-gray-500"
        >
          Learning through experience. Growing with every opportunity.
        </motion.p>

      </div>
    </section>
  );
}
