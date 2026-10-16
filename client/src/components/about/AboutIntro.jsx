
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function AboutIntro() {
  const technologies = [
    {
      name: "React",
      icon: <FiCode size={14} />,
      color: "violet",
    },
    {
      name: "Node.js",
      icon: <FiServer size={14} />,
      color: "cyan",
    },
    {
      name: "MongoDB",
      icon: <FiDatabase size={14} />,
      color: "emerald",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-[-180px] bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* =====================================================
              LEFT PROFILE VISUAL
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mx-auto w-full max-w-lg lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-violet-950/10 sm:p-8">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

              {/* Top label */}
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  Developer Profile
                </span>

                <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[10px] font-medium text-emerald-300">
                    Available
                  </span>
                </span>
              </div>

              {/* Profile visual */}
              <div className="relative mt-8 flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                {/* Orbit rings */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-64 w-64 rounded-full border border-violet-400/10"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-48 w-48 rounded-full border border-cyan-400/10 border-dashed"
                />

                {/* Glow */}
                <div className="absolute h-36 w-36 rounded-full bg-violet-600/20 blur-[55px]" />

                {/* Main avatar */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-[0_20px_70px_rgba(124,58,237,0.3)]"
                >
                  <span className="text-3xl font-bold tracking-tight text-white">
                    KM
                  </span>
                </motion.div>

                {/* Floating technology cards */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-5 top-8 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/90 px-3 py-2 shadow-xl backdrop-blur-md"
                >
                  <span className="text-violet-300">
                    <FiCode size={14} />
                  </span>

                  <span className="text-[11px] font-medium text-neutral-300">
                    Frontend
                  </span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 right-5 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/90 px-3 py-2 shadow-xl backdrop-blur-md"
                >
                  <span className="text-cyan-300">
                    <FiServer size={14} />
                  </span>

                  <span className="text-[11px] font-medium text-neutral-300">
                    Backend
                  </span>
                </motion.div>

                {/* Small orbit dot */}
                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-full w-full"
                >
                  <span className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.9)]" />
                </motion.span>
              </div>

              {/* Technology row */}
              <div className="relative mt-5 grid grid-cols-3 gap-2">
                {technologies.map((technology) => {
                  const colorClasses = {
                    violet:
                      "border-violet-400/15 bg-violet-500/[0.05] text-violet-300",
                    cyan:
                      "border-cyan-400/15 bg-cyan-500/[0.05] text-cyan-300",
                    emerald:
                      "border-emerald-400/15 bg-emerald-500/[0.05] text-emerald-300",
                  };

                  return (
                    <div
                      key={technology.name}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 ${colorClasses[technology.color]}`}
                    >
                      {technology.icon}

                      <span className="text-[11px] font-medium text-neutral-300">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Building practical solutions with modern web technologies."
              description="I’m a MERN Stack Developer focused on building reliable, scalable, and user-friendly web applications for businesses and growing products."
              align="left"
            />

            {/* Main description */}
            <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-500 sm:text-base">
              <p>
                I specialize in developing full-stack applications using
                <span className="font-medium text-neutral-300">
                  {" "}
                  React, Node.js, Express.js, and MongoDB.
                </span>{" "}
                My work includes e-commerce platforms, SaaS dashboards, REST
                APIs, and business management systems.
              </p>

              <p>
                I focus on creating applications that are not only visually
                clean, but also structured for maintainability, performance,
                security, and future growth.
              </p>

              <p>
                From frontend development and API integration to backend
                development and production deployment, I can work across
                different parts of a web application to turn business
                requirements into working software.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]"
              >
                Let's Work Together

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-950/5">
                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

            {/* =================================================
                STATS
            ================================================== */}
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {/* Experience */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/[0.035]"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <FiZap
                      size={14}
                      className="text-violet-300"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                      Experience
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    3+
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-neutral-600">
                    Years building web applications
                  </p>
                </div>
              </motion.div>

              {/* MERN */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-500/[0.035]"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <FiCode
                      size={14}
                      className="text-cyan-300"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                      Stack
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    MERN
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-neutral-600">
                    Full-stack JavaScript development
                  </p>
                </div>
              </motion.div>

              {/* End-to-End */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-blue-400/25 hover:bg-blue-500/[0.035]"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <FiServer
                      size={14}
                      className="text-blue-300"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                      Capability
                    </span>
                  </div>

                  <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    End-to-End
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-neutral-600">
                    Development through deployment
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;

