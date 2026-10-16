
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const reasons = [
  {
    icon: FiBriefcase,
    number: "01",
    title: "Business-focused development",
    description:
      "I focus on understanding the business problem first, then building features that are actually useful for the people who will use the product.",
  },
  {
    icon: FiCode,
    number: "02",
    title: "Clean and maintainable code",
    description:
      "I use reusable React components, structured APIs, clear project organization, and practical development patterns that make applications easier to maintain.",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Reliable and secure applications",
    description:
      "Authentication, authorization, API validation, role-based access, and proper data handling are considered as part of the development process.",
  },
  {
    icon: FiMessageCircle,
    number: "04",
    title: "Clear communication",
    description:
      "I keep communication simple and transparent so you know what is being built, what has been completed, and what comes next.",
  },
];

function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute -right-48 top-1/3 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-250px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Work With Me"
              title="A developer who thinks beyond the code."
              description="I combine full-stack development experience with a practical understanding of business requirements, user experience, and production deployment."
            />

            {/* Small capability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
              </span>

              <span className="text-xs font-medium text-neutral-400">
                Focused on practical, scalable solutions
              </span>
            </motion.div>
          </div>

          {/* Reasons */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  {/* Gradient border */}
                  <div className="h-full rounded-[26px] bg-gradient-to-br from-violet-500/25 via-blue-500/15 to-cyan-400/25 p-[1px] transition-all duration-500 group-hover:from-violet-400/60 group-hover:via-blue-400/50 group-hover:to-cyan-300/60">
                    <div className="relative h-full overflow-hidden rounded-[25px] bg-[#0b0b10]/95 p-6 backdrop-blur-xl sm:p-7">
                      {/* Card glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                      <div className="relative z-10">
                        {/* Top row */}
                        <div className="flex items-start justify-between">
                          {/* Icon */}
                          <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 text-violet-300 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-300">
                              <Icon size={21} />
                            </div>

                            {/* Icon glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          </div>

                          {/* Number */}
                          <span className="bg-gradient-to-r from-violet-400/70 via-blue-400/70 to-cyan-400/70 bg-clip-text text-3xl font-black tracking-tight text-transparent opacity-60">
                            {reason.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-7 text-lg font-bold tracking-tight text-white">
                          {reason.title}
                        </h3>

                        {/* Gradient title accent */}
                        <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-20" />

                        {/* Description */}
                        <p className="mt-5 text-sm leading-7 text-neutral-400">
                          {reason.description}
                        </p>

                        {/* Bottom arrow */}
                        <div className="mt-7 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                            <span className="h-1.5 w-2 rounded-full bg-cyan-400/60" />
                          </div>

                          <FiArrowUpRight
                            size={18}
                            className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10] p-[1px]"
        >
          {/* CTA gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30" />

          <div className="relative overflow-hidden rounded-[27px] bg-[#0b0b10] px-6 py-8 sm:px-9 sm:py-9">
            {/* CTA glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-600">
                  Let's build something useful
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Need a developer for your{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    next web project?
                  </span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  Let's discuss your idea and figure out the right technical
                  solution for your business.
                </p>
              </div>

              {/* Technology stack */}
              <div className="flex flex-wrap items-center gap-2">
                {["React", "Node.js", "MongoDB"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-400 transition-colors duration-300 hover:border-violet-400/30 hover:text-violet-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <div className="relative z-10 mt-7 h-px bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyWorkWithMe;
