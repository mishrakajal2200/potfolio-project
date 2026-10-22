
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCode,
  FiCheckCircle,
  FiZap,
  FiTarget,
} from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.15 };

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel>{eyebrow}</SectionLabel>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />

        <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-24">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative text-center"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-violet-300">
              404
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Project not found
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-400">
              The project you are looking for does not exist or may have moved.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <FiArrowLeft />
              Back to Projects
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    );
  }

  const technologies = project.technologies || [];
  const features = project.features || [];
  const challenges = project.challenges || [];
  const results = project.results || [];

  const projectInitials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  const metaItems = [
    { label: "Role", value: project.role, icon: FiCode },
    { label: "Duration", value: project.duration, icon: FiTarget },
    { label: "Category", value: project.category, icon: FiLayers },
    { label: "Year", value: project.year, icon: FiZap },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080810] text-white selection:bg-violet-500/30">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.07]">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 left-[8%] h-[450px] w-[450px] rounded-full bg-violet-600/[0.17] blur-[130px]" />
            <div className="absolute right-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.10] blur-[140px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080810]/20 to-[#080810]" />
          </div>

          <Container>
            <div className="pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-neutral-400 backdrop-blur transition hover:border-violet-400/30 hover:text-white"
              >
                <FiArrowLeft
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  size={16}
                />
                Back to Projects
              </Link>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.65 }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3.5 py-2 text-xs font-semibold text-violet-200">
                      <FiLayers size={14} />
                      {project.category}
                    </span>

                    <span className="text-sm text-neutral-500">
                      {project.year}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                      {project.status}
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                    {project.title}
                  </h1>

                  <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400" />

                  <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg sm:leading-9">
                    {project.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-500 via-indigo-500 to-indigo-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
                      >
                        Visit Live Project
                        <FiExternalLink
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                      >
                        <FiGithub size={17} />
                        View GitHub
                        <FiArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  {technologies.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.07] bg-black/20 px-3 py-1.5 text-xs text-neutral-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Project overview card */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-violet-500/30 via-indigo-500/10 to-cyan-400/20 opacity-70 blur-xl" />

                  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#10101b]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                          Project overview
                        </p>
                        <h2 className="mt-2 text-lg font-semibold text-white">
                          At a glance
                        </h2>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/15 to-cyan-400/10 text-violet-200">
                        <FiLayers size={20} />
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {metaItems.map(({ label, value, icon: Icon }) => (
                        <motion.div
                          key={label}
                          whileHover={{ y: -3 }}
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-violet-400/20 hover:bg-violet-400/[0.04] sm:p-5"
                        >
                          <Icon className="text-violet-300" size={18} />

                          <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                            {label}
                          </p>

                          <p className="mt-2 break-words text-sm font-semibold leading-6 text-white">
                            {value || "—"}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                        <FiCheckCircle size={18} />
                      </span>

                      <div>
                        <p className="text-sm font-medium text-neutral-200">
                          Project status
                        </p>
                        <p className="mt-1 text-xs leading-5 text-neutral-500">
                          {project.status || "Project details"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Project preview */}
        <section className="relative py-16 sm:py-24">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>Project preview</SectionLabel>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    A closer look at the build.
                  </h2>
                </div>

                <span className="text-xs text-neutral-500">
                  {project.category} / {project.year}
                </span>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px rounded-[25px] bg-gradient-to-r from-violet-500/60 via-indigo-500/30 to-cyan-400/50 opacity-70 blur-[2px] transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111c] p-2 sm:p-3">
                  <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-3 sm:px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                    <div className="mx-auto max-w-xs flex-1 truncate rounded-lg border border-white/[0.06] bg-black/20 px-3 py-1.5 text-center text-[10px] text-neutral-500">
                      {project.links?.live || project.title}
                    </div>

                    <FiExternalLink className="text-neutral-600" size={15} />
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="aspect-[16/9] w-full rounded-b-2xl object-contain object-top transition duration-700 group-hover:scale-[1.01] sm:aspect-[16/8]"
                    />
                  ) : (
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-b-2xl bg-gradient-to-br from-violet-950 via-[#121226] to-cyan-950 sm:aspect-[16/8]">
                      <div className="absolute h-64 w-64 rounded-full bg-violet-500/20 blur-[90px]" />

                      <div className="relative text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] text-2xl font-semibold text-white backdrop-blur">
                          {projectInitials}
                        </div>
                        <p className="mt-5 text-sm text-neutral-300">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Technology stack */}
        <section className="relative border-y border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent py-20 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <SectionHeading
                  eyebrow="Technology stack"
                  title="Built with modern tools."
                  description="A selection of technologies used to develop and deliver this project."
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={sectionViewport}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group flex min-h-[76px] items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.05]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-gradient-to-br from-violet-400/15 to-indigo-400/10 text-violet-200 transition group-hover:border-violet-400/30">
                      <FiCode size={17} />
                    </span>

                    <span className="text-sm font-medium leading-5 text-neutral-300 transition group-hover:text-white">
                      {technology}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="relative py-20 sm:py-28">
          <div className="pointer-events-none absolute right-[-160px] top-20 h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-[110px]" />

          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
            >
              <SectionHeading
                eyebrow="Features"
                title="What was built."
                description="Core functionality designed to create a complete and practical product experience."
              />

              <span className="shrink-0 text-sm text-neutral-500">
                {String(features.length).padStart(2, "0")} features
              </span>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.article
                  key={`${feature}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-5 transition-colors duration-300 hover:border-violet-400/25 sm:p-6"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/0 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-gradient-to-br from-violet-400/15 to-indigo-400/10 text-violet-200">
                      <FiCheckCircle size={19} />
                    </span>

                    <span className="font-mono text-xs text-neutral-600 transition group-hover:text-violet-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-base font-semibold leading-6 text-neutral-200 transition group-hover:text-white">
                    {feature}
                  </h3>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-400/30 via-indigo-400/10 to-transparent" />
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Challenges and solutions */}
        <section className="border-y border-white/[0.06] bg-white/[0.018] py-20 sm:py-28">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Behind the build"
                title="Challenges turned into solutions."
                description="A look at the engineering decisions and practical problems addressed during development."
              />
            </motion.div>

            <div className="mt-12 space-y-5">
              {challenges.map((challenge, index) => (
                <motion.article
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0e0e19] p-6 transition-colors hover:border-violet-400/20 sm:p-8 lg:p-9"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-400 opacity-70 transition group-hover:opacity-100" />

                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold tracking-widest text-violet-300">
                          0{index + 1}
                        </span>
                        <span className="h-px w-8 bg-violet-400/40" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                          Challenge
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold leading-7 text-white">
                        {challenge.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-neutral-400">
                        {challenge.description}
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-5 sm:p-6">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/[0.06] blur-3xl" />

                      <div className="relative flex items-center gap-2">
                        <FiCheckCircle
                          className="text-emerald-300"
                          size={17}
                        />
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                          Solution
                        </p>
                      </div>

                      <p className="relative mt-4 text-sm leading-7 text-neutral-300">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="relative py-20 sm:py-28">
          <div className="pointer-events-none absolute left-[-140px] top-10 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <SectionHeading
                  eyebrow="Project outcomes"
                  title="What the project achieved."
                  description="The key capabilities delivered through implementation, integration, and deployment."
                />
              </motion.div>

              <div className="space-y-3">
                {results.map((result, index) => (
                  <motion.div
                    key={`${result}-${index}`}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={sectionViewport}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] font-mono text-xs font-semibold text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1.5 text-sm leading-6 text-neutral-300 transition group-hover:text-white">
                      {result}
                    </p>

                    <FiArrowUpRight
                      className="ml-auto mt-2 shrink-0 text-neutral-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      size={16}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="pb-20 pt-4 sm:pb-28">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.6 }}
              className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#10101c] px-6 py-14 text-center sm:px-12 sm:py-20"
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px]" />
                <div className="absolute -bottom-40 right-[-5%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:26px_26px] opacity-20" />
              </div>

              <SectionLabel>Have a project in mind?</SectionLabel>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                Have an idea for a website, e-commerce platform, or web
                application? Let's discuss your requirements and turn them
                into a practical solution.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/contact">
                  Start a Conversation
                </Button>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Explore More Projects
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
