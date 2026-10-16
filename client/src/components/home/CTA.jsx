
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
  FiCheck,
} from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";

const projectTypes = [
  "E-commerce",
  "SaaS Dashboard",
  "React Development",
  "API Development",
];

function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32">
      {/* =========================================
          BACKGROUND
      ========================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main center glow */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Side glows */}
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#07070a_75%)]" />
      </div>

      <Container className="relative z-10">
        {/* =========================================
            MAIN CTA
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Gradient border */}
          <div className="rounded-[32px] bg-gradient-to-br from-violet-500/50 via-blue-500/20 to-cyan-400/50 p-[1px] shadow-[0_0_80px_rgba(99,102,241,0.08)]">
            <div className="relative overflow-hidden rounded-[31px] bg-[#0b0b10]/95 px-6 py-14 backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              {/* =========================================
                  DECORATIVE ORBITS
              ========================================== */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-violet-400/10">
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.9)]" />
              </div>

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-cyan-400/10">
                <div className="absolute bottom-8 right-10 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
              </div>

              {/* Decorative corner lines */}
              <div className="pointer-events-none absolute left-8 top-8 h-12 w-12 border-l border-t border-violet-400/20 sm:left-12 sm:top-12" />

              <div className="pointer-events-none absolute bottom-8 right-8 h-12 w-12 border-b border-r border-cyan-400/20 sm:bottom-12 sm:right-12" />

              {/* Internal glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

              {/* =========================================
                  CONTENT
              ========================================== */}
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-semibold text-violet-200"
                >
                  <FiMessageCircle
                    size={14}
                    className="text-violet-300"
                  />

                  Let's build something useful
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
                >
                  Have an idea?
                  <br />

                  <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's build it together.
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base"
                >
                  Whether you need an e-commerce platform, SaaS dashboard,
                  custom React application, REST API, or improvements to an
                  existing product, let's turn your idea into a reliable web
                  solution.
                </motion.p>

                {/* =========================================
                    PROJECT TYPES
                ========================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-8 flex flex-wrap justify-center gap-2"
                >
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] font-medium text-neutral-500 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/[0.06] hover:text-violet-200"
                    >
                      {type}
                    </span>
                  ))}
                </motion.div>

                {/* =========================================
                    ACTIONS
                ========================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
                >
                  <Button
                    to="/contact"
                    size="lg"
                    className="shadow-[0_0_30px_rgba(139,92,246,0.18)]"
                  >
                    Start a Conversation
                  </Button>

                  <a
                    href="mailto:kajalmishra@example.com"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                  >
                    <FiMail
                      size={17}
                      className="text-cyan-300"
                    />

                    Send an Email

                    <FiArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </motion.div>

                {/* =========================================
                    AVAILABILITY
                ========================================== */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-9 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  </span>

                  <span className="text-xs font-medium text-neutral-500">
                    Currently available for freelance projects
                  </span>
                </motion.div>
              </div>

              {/* =========================================
                  BOTTOM INFO BAR
              ========================================== */}
              <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <FiCheck
                      size={14}
                      className="text-violet-400"
                    />
                    <span>Clear communication</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <FiCheck
                      size={14}
                      className="text-blue-400"
                    />
                    <span>Business-focused development</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <FiCheck
                      size={14}
                      className="text-cyan-400"
                    />
                    <span>End-to-end web solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTA;
