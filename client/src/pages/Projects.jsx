
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import ProjectFilter from "../components/projects/ProjectFilter";
import { getProjects } from "../services/projectService";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getProjects();

        if (!Array.isArray(result?.data)) {
          throw new Error("Invalid projects API response.");
        }

        const normalizedProjects = result.data.map((project) => ({
          ...project,
          id: project._id || project.id,
          slug: project.slug || project._id,
          image: project.image || "",
          links: {
            live: project.liveUrl || "",
            github: project.githubUrl || "",
          },
          shortDescription:
            project.shortDescription || project.description || "",
          technologies: Array.isArray(project.technologies)
            ? project.technologies
            : [],
          features: Array.isArray(project.features)
            ? project.features
            : [],
          status: project.status || "Published",
          year: project.year
            ? String(project.year)
            : project.createdAt
              ? new Date(project.createdAt).getFullYear().toString()
              : "Project",
          role: project.role || "Full Stack Development",
        }));

        if (isMounted) {
          setProjects(normalizedProjects);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Unable to load projects. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [retryCount]);

  // Build categories from the actual API data.
  const projectCategories = [
    "All",
    ...new Set(projects.map((project) => project.category).filter(Boolean)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // Prefer a featured project. If none is marked featured,
  // use the first project as the hero when "All" is selected.
  const featuredProject =
    activeCategory === "All"
      ? filteredProjects.find((project) => project.featured) ||
        filteredProjects[0]
      : null;

  const remainingProjects =
    activeCategory === "All" && featuredProject
      ? filteredProjects.filter(
          (project) => project.id !== featuredProject.id
        )
      : filteredProjects;

  const handleRetry = () => {
    setRetryCount((count) => count + 1);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070710] text-white selection:bg-violet-500/30">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-48">
          {/* Ambient gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 35, 0],
                y: [0, -25, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-48 -top-32 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px] sm:h-[700px] sm:w-[700px]"
            />

            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 35, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-48 top-24 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.13] blur-[140px] sm:h-[650px] sm:w-[650px]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070710]/20 to-[#070710]" />

            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 75%)",
              }}
            />
          </div>

          <Container className="relative z-10">
            <div className="max-w-5xl">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2.5 shadow-[0_0_35px_rgba(139,92,246,0.08)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-200 sm:text-xs">
                  Selected work & experiments
                </span>

                <FiStar className="text-cyan-300" size={13} />
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
                className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-[92px]"
              >
                Turning ideas
                <br />
                into{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-2 -z-10 rounded-full bg-violet-500/10 blur-2xl" />
                  <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    digital products.
                  </span>
                </span>
              </motion.h1>

              {/* Description and CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="mt-8 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between"
              >
                <p className="max-w-2xl text-sm leading-8 text-neutral-400 sm:text-base lg:text-lg">
                  Exploring the intersection of thoughtful design and
                  robust engineering. From full-stack applications to
                  multi-tenant SaaS platforms, each project is built
                  around practical problems and purposeful solutions.
                </p>

                <a
                  href="#work"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-5 pr-2 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
                >
                  Explore projects

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-950/40 transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowDown size={15} />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Portfolio stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-16 grid max-w-4xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] backdrop-blur-xl sm:mt-20"
            >
              <div className="p-4 sm:p-7">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </p>
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Projects
                </p>
              </div>

              <div className="border-x border-white/[0.08] p-4 sm:p-7">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    {Math.max(projectCategories.length - 1, 0)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                </p>
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Categories
                </p>
              </div>

              <div className="p-4 sm:p-7">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
                    MERN
                  </span>
                </p>
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Core stack
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section
          id="work"
          className="relative border-t border-white/[0.06] py-20 sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-48 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-600/[0.07] blur-[140px]" />

          <Container className="relative z-10">
            {/* Section heading */}
            <div className="mb-10 flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
                  <span className="h-px w-7 bg-gradient-to-r from-violet-400 to-cyan-400" />
                  01 / The portfolio
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Work that speaks
                  <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                    {" "}
                    for itself.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                  A closer look at the applications, features, and
                  engineering decisions behind each build.
                </p>
              </div>

              {/* Dynamic category filters */}
              {!loading && !error && projects.length > 0 && (
                <div className="max-w-full overflow-x-auto rounded-full border border-white/[0.09] bg-white/[0.025] p-1.5 backdrop-blur-xl">
                  <ProjectFilter
                    categories={projectCategories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                  />
                </div>
              )}
            </div>

            {/* Loading state */}
            {loading && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025]"
                  >
                    <div className="aspect-[16/10] animate-pulse bg-gradient-to-br from-violet-500/15 via-indigo-500/[0.08] to-cyan-500/15" />
                    <div className="space-y-4 p-6">
                      <div className="h-3 w-24 animate-pulse rounded-full bg-white/10" />
                      <div className="h-6 w-3/4 animate-pulse rounded-full bg-white/10" />
                      <div className="h-3 w-full animate-pulse rounded-full bg-white/[0.06]" />
                      <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/[0.06]" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error state */}
            {!loading && error && (
              <div className="rounded-3xl border border-rose-400/20 bg-rose-400/[0.04] px-6 py-16 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                  Something went wrong
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Projects couldn't be loaded.
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-400">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={handleRetry}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:brightness-110"
                >
                  Try again
                  <FiArrowUpRight size={15} />
                </button>
              </div>
            )}

            {/* Empty state */}
            {!loading && !error && projects.length === 0 && (
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-20 text-center">
                <FiLayers className="mx-auto text-violet-300" size={34} />
                <h3 className="mt-5 text-2xl font-semibold">
                  Good things are in progress.
                </h3>
                <p className="mt-3 text-sm text-neutral-400">
                  Projects will appear here once they're published.
                </p>
              </div>
            )}

            {/* Project content */}
            {!loading && !error && projects.length > 0 && (
              <>
                {/* Featured project */}
                {activeCategory === "All" && featuredProject && (
                  <motion.article
                    key={featuredProject.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative mb-20 sm:mb-28"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-xs text-neutral-500">
                        01 — Featured
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-200 sm:text-[10px]">
                        <FiStar size={12} />
                        Selected project
                      </span>
                    </div>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0d0d19] shadow-[0_25px_100px_rgba(0,0,0,0.3)] transition-colors duration-500 hover:border-violet-400/25 sm:rounded-[32px]">
                      {/* Top gradient line */}
                      <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

                      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                        {/* Preview */}
                        <Link
                          to={`/projects/${featuredProject.slug}`}
                          className="group/preview relative block min-h-[280px] overflow-hidden border-b border-white/[0.08] bg-[#101020] sm:min-h-[400px] lg:min-h-[560px] lg:border-b-0 lg:border-r"
                        >
                          {featuredProject.image ? (
                            <img
                              src={featuredProject.image}
                              alt={`${featuredProject.title} preview`}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.04]"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950/80 via-[#11132c] to-cyan-950/60">
                              <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />
                              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-[80px]" />
                              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover/preview:scale-110">
                                <FiLayers
                                  size={38}
                                  className="text-violet-200"
                                />
                              </div>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-[#070710]/90 via-transparent to-black/10" />

                          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                              {featuredProject.status}
                            </span>
                          </div>

                          <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-7 sm:right-7">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                                {featuredProject.category}
                              </p>
                              <p className="mt-2 max-w-md text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                {featuredProject.title}
                              </p>
                            </div>

                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover/preview:border-violet-300/50 group-hover/preview:bg-violet-500/30">
                              <FiArrowUpRight size={19} />
                            </span>
                          </div>
                        </Link>

                        {/* Featured details */}
                        <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-10 xl:p-12">
                          <div>
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-mono text-xs text-cyan-300">
                                {featuredProject.year}
                              </span>
                              <span className="text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                                Featured build
                              </span>
                            </div>

                            <h3 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                              {featuredProject.title}
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-neutral-400">
                              {featuredProject.description ||
                                featuredProject.shortDescription}
                            </p>

                            <div className="my-7 h-px bg-gradient-to-r from-violet-400/30 via-white/[0.08] to-transparent" />

                            <div>
                              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                Tech stack
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {featuredProject.technologies
                                  .slice(0, 8)
                                  .map((technology, index) => (
                                    <span
                                      key={technology}
                                      className={`rounded-lg border px-3 py-2 text-[10px] font-medium transition-colors duration-300 ${
                                        index % 3 === 0
                                          ? "border-violet-400/20 bg-violet-400/[0.06] text-violet-200 hover:border-violet-300/40"
                                          : index % 3 === 1
                                            ? "border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-200 hover:border-cyan-300/40"
                                            : "border-indigo-400/20 bg-indigo-400/[0.05] text-indigo-200 hover:border-indigo-300/40"
                                      }`}
                                    >
                                      {technology}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                              to={`/projects/${featuredProject.slug}`}
                              className="group/button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-5 py-3.5 text-xs font-semibold text-white shadow-lg shadow-indigo-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/20"
                            >
                              View case study
                              <FiArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                              />
                            </Link>

                            {featuredProject.links.github && (
                              <a
                                href={featuredProject.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3.5 text-xs font-medium text-neutral-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:text-white"
                              >
                                GitHub
                                <FiExternalLink size={13} />
                              </a>
                            )}

                            {featuredProject.links.live && (
                              <a
                                href={featuredProject.links.live}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3.5 text-xs font-medium text-neutral-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.06] hover:text-white"
                              >
                                Live demo
                                <FiExternalLink size={13} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )}

                {/* Remaining projects */}
                <div>
                  <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-5 sm:mb-10">
                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                        {activeCategory === "All"
                          ? "02 / More builds"
                          : `01 / ${activeCategory}`}
                      </p>

                      <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                        {activeCategory === "All"
                          ? "More projects"
                          : `${activeCategory} projects`}
                      </h2>
                    </div>

                    <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-neutral-400">
                      {remainingProjects.length}{" "}
                      {remainingProjects.length === 1
                        ? "PROJECT"
                        : "PROJECTS"}
                    </span>
                  </div>

                  {remainingProjects.length > 0 ? (
                    <motion.div
                      layout
                      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    >
                      <AnimatePresence mode="popLayout">
                        {remainingProjects.map((project, index) => (
                          <motion.article
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{
                              duration: 0.4,
                              delay: Math.min(index * 0.06, 0.24),
                            }}
                            className="group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.045] to-white/[0.015] transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_20px_60px_rgba(91,33,182,0.12)]"
                          >
                            {/* Accent line */}
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Image */}
                            <Link
                              to={`/projects/${project.slug}`}
                              className="relative block overflow-hidden border-b border-white/[0.07] bg-[#101020]"
                            >
                              <div className="relative aspect-[16/10] overflow-hidden">
                                {project.image ? (
                                  <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950/80 via-indigo-950/60 to-cyan-950/60">
                                    <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-violet-500/20 blur-[65px]" />
                                    <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-cyan-500/15 blur-[65px]" />
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-violet-200 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-110">
                                      <FiLayers size={27} />
                                    </div>
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#090912]/70 via-transparent to-transparent" />

                                <div className="absolute left-4 top-4">
                                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-xl">
                                    {project.category}
                                  </span>
                                </div>

                                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-violet-300/50 group-hover:bg-violet-500/30">
                                  <FiArrowUpRight size={16} />
                                </span>
                              </div>
                            </Link>

                            {/* Card content */}
                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                              <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="font-mono text-[10px] text-violet-300">
                                  {String(index + 2).padStart(2, "0")} /{" "}
                                  {project.year}
                                </span>

                                <span className="truncate text-[9px] uppercase tracking-[0.12em] text-neutral-500">
                                  {project.status}
                                </span>
                              </div>

                              <Link to={`/projects/${project.slug}`}>
                                <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-violet-200">
                                  {project.title}
                                </h3>
                              </Link>

                              <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-400">
                                {project.shortDescription ||
                                  project.description}
                              </p>

                              {/* Technologies */}
                              <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies
                                  .slice(0, 5)
                                  .map((technology, techIndex) => (
                                    <span
                                      key={technology}
                                      className={`rounded-md px-2 py-1 text-[9px] font-medium ${
                                        techIndex % 3 === 0
                                          ? "bg-violet-400/[0.08] text-violet-200"
                                          : techIndex % 3 === 1
                                            ? "bg-cyan-400/[0.07] text-cyan-200"
                                            : "bg-indigo-400/[0.08] text-indigo-200"
                                      }`}
                                    >
                                      {technology}
                                    </span>
                                  ))}
                              </div>

                              {/* Links */}
                              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5 mt-6">
                                <Link
                                  to={`/projects/${project.slug}`}
                                  className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-violet-300"
                                >
                                  Explore project
                                  <FiArrowUpRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  />
                                </Link>

                                {project.links.github && (
                                  <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] text-neutral-400 transition-all hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-white"
                                  >
                                    <FiExternalLink size={14} />
                                  </a>
                                )}

                                {!project.links.github &&
                                  project.links.live && (
                                    <a
                                      href={project.links.live}
                                      target="_blank"
                                      rel="noreferrer"
                                      aria-label={`View ${project.title} live`}
                                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] text-neutral-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-white"
                                    >
                                      <FiExternalLink size={14} />
                                    </a>
                                  )}
                              </div>
                            </div>
                          </motion.article>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-16 text-center"
                    >
                      <FiLayers
                        size={30}
                        className="mx-auto text-violet-300"
                      />

                      <h3 className="mt-5 text-xl font-semibold">
                        {activeCategory === "All"
                          ? "Your next project starts here."
                          : "More projects are on the way."}
                      </h3>

                      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-400">
                        {activeCategory === "All"
                          ? "Publish more projects to expand your portfolio."
                          : "There are no additional projects in this category yet. Explore another category instead."}
                      </p>

                      {activeCategory !== "All" && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory("All")}
                          className="mt-6 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-5 py-2.5 text-xs font-semibold text-violet-200 transition hover:bg-violet-400/[0.13]"
                        >
                          View all projects
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative mt-24 overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0c0c19] sm:mt-32 sm:rounded-[32px]"
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
                    <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-cyan-500/[0.06]" />
                  </div>

                  <div className="relative flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
                    <div className="max-w-2xl">
                      <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-violet-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        Have an idea?
                      </span>

                      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                        Let's create something
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                          {" "}
                          worth building.
                        </span>
                      </h2>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                        Have a business idea, need a website, or want
                        to improve an existing application? Let's talk
                        about your goals and the right solution.
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/20"
                    >
                      Start a conversation
                      <FiArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
