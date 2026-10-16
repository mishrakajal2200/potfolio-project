import { motion } from "framer-motion";
import kajalPicture from "../../assets/images/profile/kajal-picture.jpg";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiServer,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07070a] pt-24">
      {/* =========================================================
          RADIANT BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple glow - top left */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]"
        />

        {/* Blue glow - top right */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        />

        {/* Cyan glow - bottom right */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 right-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[110px]"
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-500/[0.07] blur-[100px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07070a] to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3.5 py-2 text-xs font-medium text-neutral-300 shadow-lg shadow-violet-500/5 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </span>
              Available for freelance projects
            </motion.div>

            {/* Small intro */}
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400"
            >
              Full Stack JavaScript Developer
            </motion.p>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              I build modern web applications that help businesses{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                sell, manage, and grow online.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
              I'm Kajal Mishra, a Full Stack JavaScript Developer specializing
              in React, Node.js, MongoDB, e-commerce platforms, SaaS
              applications, and custom business solutions.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Button to="/contact" className="shadow-xl shadow-violet-500/20">
                Let's Work Together
              </Button>

              {/* Secondary CTA */}
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:shadow-lg hover:shadow-violet-500/10"
              >
                View My Work
                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-neutral-500">
              <span className="transition-colors hover:text-neutral-300">
                3+ Years Experience
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-violet-500/60 sm:block" />

              <span className="transition-colors hover:text-neutral-300">
                React & Node.js
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-violet-500/60 sm:block" />

              <span className="transition-colors hover:text-neutral-300">
                Remote Friendly
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-violet-600/20 via-blue-500/10 to-cyan-500/20 blur-3xl" />

            {/* Main glass card */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Gradient border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

              {/* Inner border */}
              <div className="absolute inset-5 rounded-[1.5rem] border border-white/10" />

              {/* Decorative gradient circle */}
              <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-violet-400/20 bg-violet-500/[0.04] shadow-[0_0_50px_rgba(139,92,246,0.15)]" />

              {/* Decorative circle */}
              <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full border border-cyan-400/20 bg-cyan-500/[0.03] shadow-[0_0_60px_rgba(34,211,238,0.12)]" />

              {/* Decorative line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />

              {/* Decorative horizontal line */}
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

              {/* =================================================
                  CENTER PROFILE
              ================================================== */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glow */}
                <div className="absolute h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

                {/* Outer ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-52 w-52 rounded-full border border-dashed border-violet-400/20"
                />

                {/* Profile circle */}
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-cyan-500/10 shadow-2xl shadow-violet-500/20 backdrop-blur-xl">
                  {" "}
                  {/* Gradient ring */}{" "}
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-br from-violet-400/50 via-transparent to-cyan-400/50 opacity-70" />{" "}
                  {/* Profile image */}{" "}
                  <div className="relative h-[calc(100%-4px)] w-[calc(100%-4px)] overflow-hidden rounded-full bg-[#0d0d12]">
                    {" "}
                    <img
                      src={kajalPicture}
                      alt="Kajal Mishra - MERN Stack Developer"
                      className="h-full w-full object-cover object-center"
                    />{" "}
                  </div>{" "}
                </div>
              </div>

              {/* =================================================
                  TECH BADGE - REACT
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-7 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-xl border border-cyan-400/20 bg-[#0d0d12]/90 px-3 py-2 text-xs font-medium text-neutral-300 shadow-xl shadow-cyan-500/10 backdrop-blur-xl"
              >
                <FiCode className="text-cyan-400" size={15} />
                React
              </motion.div>

              {/* =================================================
                  TECH BADGE - NODE
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-7 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-xl border border-violet-400/20 bg-[#0d0d12]/90 px-3 py-2 text-xs font-medium text-neutral-300 shadow-xl shadow-violet-500/10 backdrop-blur-xl"
              >
                <FiServer className="text-violet-400" size={15} />
                Node.js
              </motion.div>

              {/* =================================================
                  BOTTOM FLOATING CARD
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-[#0d0d12]/90 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                  Specializing in
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  SaaS • E-commerce
                </p>
              </motion.div>

              {/* =================================================
                  DATABASE BADGE
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-[#0d0d12]/90 px-4 py-3 shadow-xl shadow-emerald-500/5 backdrop-blur-xl"
              >
                <FiDatabase className="text-emerald-400" size={15} />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                    Database
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-white">
                    MongoDB
                  </p>
                </div>
              </motion.div>

              {/* Top small decorative dot */}
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-20 top-7 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]"
              />

              {/* Bottom decorative dot */}
              <motion.div
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1.2, 0.8, 1.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-24 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.9)]"
              />
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            SCROLL INDICATOR
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="flex justify-center pb-8 pt-16 lg:justify-start"
        >
          <a
            href="#services"
            className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-violet-300"
          >
            Explore
            <FiArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1 group-hover:text-violet-400"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
