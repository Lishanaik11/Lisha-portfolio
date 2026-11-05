import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  Box,
  Button,
  Chip,
  Typography,
  Divider,
} from "@mui/material";

import {
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";

import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  GraduationCap,
  ShoppingBag,
  CheckCircle2,
  Clock3,
} from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  statusColor: "success" | "warning";
  icon: ReactNode;
  images: string[];
  features: string[];
  technologies: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Eduvanta",
    subtitle: "Smart E-Learning Platform",
    description:
      "An e-learning platform designed to make online education more organised and accessible. It provides separate experiences for students and administrators, with tools to manage courses, assignments, quizzes and learning progress.",
    status: "Completed",
    statusColor: "success",
    icon: <GraduationCap size={25} />,
    images: [
      "/projects/image1.png",
      "/projects/image 2.png",
      "/projects/image3.png",
      "/projects/image4.png",
      "/projects/image5.png",
      "/projects/image6.png",
      "/projects/image7.png",
    ],
    features: [
      "Separate Admin and Student dashboards",
      "Course and learning material management",
      "Assignment submission and approval",
      "Quizzes and learning progress tracking",
      "Course performance and analytics",
      "Certificate generation after course completion",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/Lishanaik11/Eduvanta",
    live: "https://eduvanta-app.vercel.app",
  },
  {
    title: "Shalivo",
    subtitle: "Online Shoe Shopping Platform",
    description:
      "An online shoe shopping platform currently under development. The project focuses on product browsing, customer accounts, shopping features and administrative management.",
    status: "In Development",
    statusColor: "warning",
    icon: <ShoppingBag size={25} />,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200",
    ],
    features: [
      "Customer registration and authentication",
      "Shoe product browsing and size selection",
      "Wishlist and order management",
      "Customer and admin functionality",
      "Chatbot integration",
      "Account and settings management",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
    ],
    github: "https://github.com/Lishanaik11/Shalivo",
  },
];

function ProjectShowcase({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % project.images.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [project.images.length]);

  const previousImage = () => {
    setCurrentImage(
      (previous) =>
        (previous - 1 + project.images.length) % project.images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
    >
{/* Project Image */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: {
      xs: 320,
      sm: 430,
      md: 560,
      lg: 620,
    },
    overflow: "hidden",
    borderRadius: "24px",
    backgroundColor: "#080808",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
  }}
>
  <AnimatePresence mode="wait">
    <motion.img
      key={currentImage}
      src={project.images[currentImage]}
      alt={`${project.title} project preview`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full"
      style={{
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  </AnimatePresence>

  <Box
    sx={{
      position: "absolute",
      top: 18,
      left: 18,
      backgroundColor: "rgba(0,0,0,0.75)",
      color: "white",
      px: 2,
      py: 0.8,
      borderRadius: "30px",
      fontSize: "12px",
      backdropFilter: "blur(10px)",
    }}
  >
    PROJECT PREVIEW
  </Box>

  <Box
    sx={{
      position: "absolute",
      bottom: 18,
      left: 18,
      right: 18,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box sx={{ display: "flex", gap: 1 }}>
      {project.images.map((_, index) => (
        <Box
          key={index}
          onClick={() => setCurrentImage(index)}
          sx={{
            width: currentImage === index ? 25 : 8,
            height: 8,
            borderRadius: "20px",
            backgroundColor:
              currentImage === index
                ? "#c084fc"
                : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </Box>

    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        onClick={previousImage}
        sx={{
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.75)",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNew fontSize="small" />
      </Box>

      <Box
        onClick={nextImage}
        sx={{
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.75)",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </Box>
    </Box>
  </Box>
</Box>

      {/* Project Details */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(180,92,255,0.12)",
              color: "#c084fc",
            }}
          >
            {project.icon}
          </Box>

          <Chip
            label={project.status}
            color={project.statusColor}
            size="small"
            variant="outlined"
          />
        </Box>

        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "34px", md: "45px" },
            fontFamily: '"Times New Roman", serif',
            fontWeight: 500,
            mb: 1,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            color: "#c084fc",
            fontSize: "16px",
            mb: 2.5,
            letterSpacing: "0.5px",
          }}
        >
          {project.subtitle}
        </Typography>

        <Typography
          sx={{
            color: "#a1a1aa",
            lineHeight: 1.9,
            fontSize: "14px",
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: "14px",
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          Key Features
        </Typography>

        <Box sx={{ display: "grid", gap: 1.2, mb: 3 }}>
          {project.features.map((feature) => (
            <Box
              key={feature}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
            >
              <CheckCircle2
                size={17}
                color="#c084fc"
                style={{ marginTop: 3, flexShrink: 0 }}
              />
              <Typography sx={{ color: "#b4b4bc", fontSize: "13px" }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            color: "white",
            fontSize: "14px",
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          Technologies Used
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3.5 }}>
          {project.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              sx={{
                color: "#d4d4d8",
                backgroundColor: "#202020",
                border: "1px solid #333",
                fontSize: "12px",
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<Code2 size={17} />}
            endIcon={<ArrowUpRight size={16} />}
            sx={{
              backgroundColor: "#b45cff",
              color: "white",
              borderRadius: "30px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              "&:hover": { backgroundColor: "#9844df" },
            }}
          >
            Source Code
          </Button>

          {project.live && (
            <Button
              component="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<ExternalLink size={17} />}
              endIcon={<ArrowUpRight size={16} />}
              sx={{
                color: "white",
                borderColor: "#555",
                borderRadius: "30px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#c084fc",
                  backgroundColor: "rgba(180,92,255,0.08)",
                },
              }}
            >
              Live Demo
            </Button>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#101010] px-7 md:px-16 lg:px-20 py-24 md:py-28 overflow-hidden"
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-150px",
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: "rgba(180,92,255,0.07)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: "#c084fc",
              fontSize: "12px",
              letterSpacing: "3px",
              mb: 3,
            }}
          >
            ( 04 — MY PROJECTS )
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontFamily: '"Times New Roman", serif',
              fontSize: { xs: "38px", md: "58px" },
              lineHeight: 1.15,
              maxWidth: "750px",
              mb: 3,
            }}
          >
            Things I've built
            <br />
            <Box component="span" sx={{ color: "#c084fc", fontStyle: "italic" }}>
              & worked on.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#a1a1aa",
              fontSize: "15px",
              lineHeight: 1.8,
              maxWidth: "600px",
              mb: 10,
            }}
          >
            A collection of projects where I explore ideas, solve problems and
            turn concepts into functional web applications.
          </Typography>
        </motion.div>

       <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
  {projects.map((project, index) => (
    <Box key={project.title}>
      <ProjectShowcase project={project} />

      {index !== projects.length - 1 && (
        <Divider
          sx={{
            mt: 10,
            borderColor: "rgba(255,255,255,0.12)",
          }}
        />
      )}
    </Box>
  ))}
</Box>
      </Box>
    </section>
  );
}