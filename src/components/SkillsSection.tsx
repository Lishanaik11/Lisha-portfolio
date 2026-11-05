
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import {
  Code,
  Web,
  Dns,
  Storage,
  Build,
} from "@mui/icons-material";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code />,
    color: "#a78bfa",
    description:
      "Languages I use to understand programming concepts and build application logic.",
    skills: ["Java", "C#", "JavaScript", "Dart", "HTML", "CSS"],
  },
  {
    title: "Frontend Development",
    icon: <Web />,
    color: "#38bdf8",
    description:
      "Technologies I use to create responsive and user-friendly interfaces.",
    skills: ["React.js", "Material UI", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: <Dns />,
    color: "#34d399",
    description:
      "Tools I use to develop server-side functionality and work with APIs.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    icon: <Storage />,
    color: "#c084fc",
    description:
      "Database technologies I use to store, manage, and retrieve application data.",
    skills: ["SQL", "PostgreSQL", "Neon"],
  },
  {
    title: "Tools & Platforms",
    icon: <Build />,
    color: "#fbbf24",
    description:
      "Tools that support my development, testing, collaboration, and deployment workflow.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Advanced Excel",
    ],
  },
];

export default function SkillsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111] px-7 py-24 md:px-16 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-xs tracking-[0.4em] text-purple-300 md:text-sm"
        >
          ( 02 — MY SKILLS )
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
            My technical
            <br />
            <span className="italic text-purple-300">
              skills & expertise.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A collection of technologies and tools I work with
            to develop applications, solve problems, and bring
            ideas to life.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const isSelected = selected === index;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
              >
                <Card
                  onClick={() =>
                    setSelected(isSelected ? null : index)
                  }
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 290,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: isSelected ? "#201b29" : "#181818",
                    border: "1px solid",
                    borderColor: isSelected
                      ? category.color
                      : "rgba(255,255,255,0.09)",
                    borderRadius: "18px",
                    transition: "all 0.3s ease",
                    boxShadow: isSelected
                      ? `0 12px 35px ${category.color}20`
                      : "0 5px 20px rgba(0,0,0,0.12)",
                    "&:hover": {
                      borderColor: category.color,
                      boxShadow: `0 12px 35px ${category.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "4px",
                      backgroundColor: category.color,
                    }}
                  />

                  <CardContent sx={{ p: 4.5 }}>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            color: category.color,
                            display: "flex",
                            "& svg": { fontSize: 25 },
                          }}
                        >
                          {category.icon}
                        </Box>

                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "17px",
                            fontWeight: 600,
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.2,
                      }}
                    >
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          sx={{
                            color: "#dedede",
                            borderColor: `${category.color}45`,
                            backgroundColor: `${category.color}08`,
                            borderRadius: "9px",
                            fontSize: "14px",
height: "36px",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              color: "#fff",
                              backgroundColor: `${category.color}25`,
                              borderColor: category.color,
                              transform: "translateY(-3px)",
                            },
                          }}
                        />
                      ))}
                    </Box>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box
                          sx={{
                            mt: 3,
                            pt: 2,
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: category.color,
                              fontSize: "11px",
                              letterSpacing: "2px",
                              mb: 1,
                            }}
                          >
                            MORE ABOUT THIS CATEGORY
                          </Typography>

                          <Typography
                            sx={{
                              color: "#aaa",
                              fontSize: "13px",
                              lineHeight: 1.7,
                            }}
                          >
                            {category.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    )}

                    <Typography
                      sx={{
                        mt: 2.5,
                        color: category.color,
                        fontSize: "11px",
                        letterSpacing: "1px",
                        opacity: 0.8,
                      }}
                    >
                      {isSelected ? "− CLICK TO COLLAPSE" : "+ EXPLORE CATEGORY"}
                    </Typography>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-sm tracking-wide text-gray-500"
        >
          Always learning. Always building. Always improving.
        </motion.p>

      </div>
    </section>
  );
}
