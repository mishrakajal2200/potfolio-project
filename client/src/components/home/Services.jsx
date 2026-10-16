
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { services } from "../../data/services";

const accentStyles = [
  {
    icon: "text-violet-300",
    iconBg: "from-violet-500/20 to-purple-500/10",
    iconBorder: "border-violet-400/20",
    glow: "bg-violet-500/20",
    border:
      "from-violet-500/40 via-purple-500/20 to-transparent",
    number: "from-violet-300 to-purple-400",
    check: "text-violet-300",
  },
  {
    icon: "text-cyan-300",
    iconBg: "from-cyan-500/20 to-blue-500/10",
    iconBorder: "border-cyan-400/20",
    glow: "bg-cyan-500/20",
    border:
      "from-cyan-400/40 via-blue-500/20 to-transparent",
    number: "from-cyan-300 to-blue-400",
    check: "text-cyan-300",
  },
  {
    icon: "text-blue-300",
    iconBg: "from-blue-500/20 to-indigo-500/10",
    iconBorder: "border-blue-400/20",
    glow: "bg-blue-500/20",
    border:
      "from-blue-500/40 via-indigo-500/20 to-transparent",
    number: "from-blue-300 to-indigo-400",
    check: "text-blue-300",
  },
  {
    icon: "text-purple-300",
    iconBg: "from-purple-500/20 to-pink-500/10",
    iconBorder: "border-purple-400/20",
    glow: "bg-purple-500/20",
    border:
      "from-purple-500/40 via-pink-500/20 to-transparent",
    number: "from-purple-300 to-pink-400",
    check: "text-purple-300",
  },
  {
    icon: "text-emerald-300",
    iconBg: "from-emerald-500/20 to-cyan-500/10",
    iconBorder: "border-emerald-400/20",
    glow: "bg-emerald-500/20",
    border:
      "from-emerald-500/40 via-cyan-500/20 to-transparent",
    number: "from-emerald-300 to-cyan-400",
    check: "text-emerald-300",
  },
  {
    icon: "text-orange-300",
    iconBg: "from-orange-500/20 to-yellow-500/10",
    iconBorder: "border-orange-400/20",
    glow: "bg-orange-500/20",
    border:
      "from-orange-500/40 via-yellow-500/20 to-transparent",
    number: "from-orange-300 to-yellow-400",
    check: "text-orange-300",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main violet glow */}
        <div className="absolute left-[-180px] top-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Blue glow */}
        <div className="absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-180px] left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Grid */}
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
        {/* =========================================================
            HEADER
        ========================================================== */}

        <SectionHeading
          eyebrow="Services"
          title="Web solutions built around your business."
          description="From customer-facing e-commerce platforms to internal dashboards and scalable APIs, I build practical web applications designed around real business requirements."
        />

        {/* =========================================================
            SERVICES GRID
        ========================================================== */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = accentStyles[index % accentStyles.length];

            return (
              <motion.article
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Gradient border */}
                <div
                  className={`h-full rounded-[28px] bg-gradient-to-br ${accent.border} p-[1px] transition-all duration-500 group-hover:from-violet-400/70 group-hover:via-blue-400/40 group-hover:to-cyan-400/50`}
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[27px] bg-[#0b0b10]/95 p-6 backdrop-blur-xl sm:p-7">
                    {/* =================================================
                        CARD GLOWS
                    ================================================== */}

                    <div
                      className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full ${accent.glow} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div
                      className={`pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full ${accent.glow} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-60`}
                    />

                    {/* Top gradient line */}
                    <div className="absolute left-8 right-8 top-0 h-px scale-x-0 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 opacity-80 transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="relative z-10 flex h-full flex-col">
                      {/* =================================================
                          TOP ROW
                      ================================================== */}

                      <div className="flex items-start justify-between">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 3,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.iconBorder} bg-gradient-to-br ${accent.iconBg} ${accent.icon} shadow-lg`}
                        >
                          <Icon size={23} />
                        </motion.div>

                        {/* Number */}
                        <span
                          className={`bg-gradient-to-r ${accent.number} bg-clip-text text-4xl font-black tracking-tight text-transparent opacity-20 transition-all duration-300 group-hover:opacity-70`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* =================================================
                          CONTENT
                      ================================================== */}

                      <div className="mt-7">
                        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300">
                          {service.title}
                        </h3>

                        <div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-16" />

                        <p className="mt-5 text-sm leading-7 text-neutral-400">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* =================================================
                          FEATURES
                      ================================================== */}

                      <div className="mt-7 space-y-3">
                        {service.features.slice(0, 4).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400"
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] ${accent.check}`}
                            >
                              <FiCheck size={11} />
                            </span>

                            <span className="leading-5">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* =================================================
                          BOTTOM
                      ================================================== */}

                      <div className="mt-auto pt-8">
                        <div className="h-px bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-transparent" />

                        <div className="mt-5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${accent.iconBg} ${accent.icon}`}
                            >
                              <FiLayers size={13} />
                            </span>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                              What I can build
                            </span>
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-cyan-500 group-hover:text-white">
                            <FiArrowUpRight
                              size={16}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="relative mt-10 overflow-hidden rounded-[28px] p-[1px]"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/40 via-blue-500/25 to-cyan-400/40" />

          <div className="relative overflow-hidden rounded-[27px] bg-[#0b0b10] px-6 py-8 sm:px-8 sm:py-9">
            {/* CTA glows */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FiZap className="text-violet-400" size={15} />

                  <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent">
                    Let's build something useful
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Have a project in mind?{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's talk.
                  </span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  Tell me what you're building, what problem you're solving,
                  and where you need help. We'll figure out the right approach.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
              >
                Start a conversation

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Bottom gradient line */}
            <div className="relative z-10 mt-7 h-px bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
