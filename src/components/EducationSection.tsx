
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Divider,
} from "@mui/material";
import {
  GraduationCap,
  BookOpen,
  School,
  CalendarDays,
  MapPin,
} from "lucide-react";

const semesters = [
  { name: "Semester 1", sgpa: "9.73" },
  { name: "Semester 2", sgpa: "9.14" },
  { name: "Semester 3", sgpa: "9.64" },
  { name: "Semester 4", sgpa: "9.82" },
  { name: "Semester 5", sgpa: "Awaited", pending: true },
];

// Circular CGPA Display
function CgpaRing() {
  const circumference = 2 * Math.PI * 72;
  const progress = (9.58 / 10) * circumference;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        py: 2,
      }}
    >
      <Box sx={{ position: "relative", width: 190, height: 190 }}>
        <svg width="190" height="190" viewBox="0 0 190 190">
          <defs>
            <linearGradient
              id="cgpaGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d7a8ff" />
              <stop offset="100%" stopColor="#8c35d6" />
            </linearGradient>
          </defs>

          <circle
            cx="95"
            cy="95"
            r="72"
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="10"
          />

          <motion.circle
            cx="95"
            cy="95"
            r="72"
            fill="none"
            stroke="url(#cgpaGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - progress,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            transform="rotate(-90 95 95)"
          />
        </svg>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#d4a9ff",
              fontSize: "43px",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            9.58
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              fontSize: "12px",
              mt: 1,
              letterSpacing: 2,
            }}
          >
            OUT OF 10
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          mt: 2,
        }}
      >
        Current CGPA
      </Typography>

      <Typography
        sx={{
          color: "#999",
          fontSize: "12px",
          textAlign: "center",
          mt: 0.5,
        }}
      >
        Cumulative Grade Point Average
      </Typography>
    </Box>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#101010] px-6 py-24 md:px-16 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: "#b45cff",
              fontSize: "12px",
              letterSpacing: "4px",
              mb: 3,
            }}
          >
            ( 05 — EDUCATION )
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontFamily: '"Times New Roman", serif',
              fontSize: { xs: "42px", md: "64px" },
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Academic background
            <Box
              component="span"
              sx={{
                color: "#b45cff",
                fontStyle: "italic",
                display: { xs: "block", md: "inline" },
                ml: { xs: 0, md: 2 },
              }}
            >
              & qualifications.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              fontSize: "15px",
              lineHeight: 1.8,
              maxWidth: "650px",
              mb: 8,
            }}
          >
            My academic journey, technical specialization and educational
            achievements.
          </Typography>
        </motion.div>

        {/* Bachelor's Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card
            sx={{
              background:
                "linear-gradient(125deg, #21182c 0%, #17151b 48%, #141414 100%)",
              border: "1px solid rgba(180,92,255,0.35)",
              borderRadius: "24px",
              color: "#fff",
              overflow: "hidden",
              mb: 5,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>

              {/* College Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "16px",
                    bgcolor: "rgba(180,92,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={32} color="#c58aff" />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#c58aff",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      mb: 0.5,
                    }}
                  >
                    UNDERGRADUATE EDUCATION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: 600,
                    }}
                  >
                    Bachelor's Degree
                  </Typography>
                </Box>
              </Box>

              {/* Degree Information + CGPA Ring */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1.5fr 0.8fr",
                  },
                  alignItems: "center",
                  gap: { xs: 4, md: 3 },
                  mb: 4,
                }}
              >
                {/* Degree Information */}
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "27px", md: "38px" },
                      fontWeight: 700,
                      lineHeight: 1.25,
                      maxWidth: "650px",
                      mb: 2,
                    }}
                  >
                    Bachelor of Computer Applications
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: "8px",
                      bgcolor: "rgba(180,92,255,0.15)",
                      border: "1px solid rgba(180,92,255,0.3)",
                      mb: 3,
                    }}
                  >
                    <GraduationCap size={19} color="#d4a9ff" />

                    <Typography
                      sx={{
                        color: "#d4a9ff",
                        fontSize: { xs: "14px", md: "17px" },
                        fontWeight: 600,
                      }}
                    >
                      Specialization in Full Stack Development
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Pillai College of Arts, Commerce & Science
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <MapPin size={16} color="#aaa" />
                      <Typography
                        sx={{ color: "#aaa", fontSize: "14px" }}
                      >
                        New Panvel, Maharashtra
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarDays size={16} color="#aaa" />
                      <Typography
                        sx={{ color: "#aaa", fontSize: "14px" }}
                      >
                        2024 – 2027
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* CGPA Ring */}
                <Box
                  sx={{
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(180,92,255,0.2)",
                    minHeight: { xs: 250, md: 290 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CgpaRing />
                </Box>
              </Box>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.12)",
                  mb: 4,
                }}
              />

              {/* Semester Results */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2.5,
                  }}
                >
                  <BookOpen size={22} color="#c58aff" />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Semester-wise Academic Performance
                  </Typography>
                </Box>

                <Box
                  sx={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  {semesters.map((semester, index) => (
                    <Box key={semester.name}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 2,
                          px: { xs: 2, md: 3 },
                          py: 2,
                          bgcolor:
                            index % 2 === 0
                              ? "rgba(255,255,255,0.035)"
                              : "transparent",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#ddd",
                            fontSize: "15px",
                          }}
                        >
                          {semester.name}
                        </Typography>

                        {semester.pending ? (
                          <Chip
                            label="Result Awaited"
                            size="small"
                            sx={{
                              bgcolor: "rgba(229,198,139,0.12)",
                              color: "#e5c68b",
                            }}
                          />
                        ) : (
                          <Typography
                            sx={{
                              color: "#d4a9ff",
                              fontSize: "19px",
                              fontWeight: 700,
                            }}
                          >
                            {semester.sgpa}
                          </Typography>
                        )}
                      </Box>

                      {index !== semesters.length - 1 && (
                        <Divider
                          sx={{
                            borderColor: "rgba(255,255,255,0.07)",
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Previous Education */}
        <Typography
          sx={{
            color: "#fff",
            fontSize: "23px",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Previous Education
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          {/* HSC Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              sx={{
                height: "100%",
                bgcolor: "#181818",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <School size={27} color="#c58aff" />

                <Typography
                  sx={{
                    color: "#c58aff",
                    fontSize: "12px",
                    letterSpacing: 2,
                    mt: 2,
                  }}
                >
                  HIGHER SECONDARY EDUCATION
                </Typography>

                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  HSC – Commerce
                </Typography>

                <Typography
                  sx={{
                    color: "#bbb",
                    fontSize: "14px",
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  ICLES' Motilal Jhunjhunwala College, Vashi
                </Typography>

                <Divider
                  sx={{
                    borderColor: "rgba(255,255,255,0.10)",
                    my: 2.5,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#999", fontSize: "12px" }}
                    >
                      PERCENTAGE
                    </Typography>

                    <Typography
                      sx={{
                        color: "#d4a9ff",
                        fontSize: "38px",
                        fontWeight: 700,
                      }}
                    >
                      77%
                    </Typography>
                  </Box>

                  <Chip
                    label="2023 – 2024"
                    sx={{
                      bgcolor: "#292929",
                      color: "#ccc",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* SSC Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card
              sx={{
                height: "100%",
                bgcolor: "#181818",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <School size={27} color="#c58aff" />

                <Typography
                  sx={{
                    color: "#c58aff",
                    fontSize: "12px",
                    letterSpacing: 2,
                    mt: 2,
                  }}
                >
                  SECONDARY SCHOOL EDUCATION
                </Typography>

                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  SSC
                </Typography>

                <Typography
                  sx={{
                    color: "#bbb",
                    fontSize: "14px",
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  ASP Convert English High School
                </Typography>

                <Divider
                  sx={{
                    borderColor: "rgba(255,255,255,0.10)",
                    my: 2.5,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#999", fontSize: "12px" }}
                    >
                      PERCENTAGE
                    </Typography>

                    <Typography
                      sx={{
                        color: "#d4a9ff",
                        fontSize: "38px",
                        fontWeight: 700,
                      }}
                    >
                      81%
                    </Typography>
                  </Box>

                  <Chip
                    label="2021 – 2022"
                    sx={{
                      bgcolor: "#292929",
                      color: "#ccc",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </div>
    </section>
  );
}
