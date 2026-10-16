
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { experience } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl" />

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
        <SectionHeading
          eyebrow="Experience"
          title="Experience building real-world web applications."
          description="A look at the roles and projects that have shaped my experience as a full-stack JavaScript developer."
        />

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative">
            {/* Gradient timeline line */}
            <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-400 opacity-70 sm:block" />

            <div className="space-y-10 sm:space-y-12">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.startDate}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-[#07070a] shadow-[0_0_25px_rgba(139,92,246,0.25)] sm:flex">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400">
                      <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                    </div>
                  </div>

                  {/* Card gradient border */}
                  <div className="group rounded-[28px] bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30 p-[1px] transition-all duration-500 hover:from-violet-400/60 hover:via-blue-400/50 hover:to-cyan-300/60">
                    <div className="relative overflow-hidden rounded-[27px] bg-[#0b0b10]/95 p-6 backdrop-blur-xl sm:p-8">
                      {/* Card glow */}
                      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                      <div className="relative z-10">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            {/* Experience type */}
                            <div className="flex items-center gap-2">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300 ring-1 ring-white/10">
                                <FiBriefcase size={15} />
                              </span>

                              <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-[0.16em] text-transparent">
                                {item.type || "Experience"}
                              </span>
                            </div>

                            {/* Role */}
                            <h3 className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                              {item.role}
                            </h3>

                            {/* Company */}
                            <p className="mt-2 bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-sm font-semibold text-transparent">
                              {item.company}
                            </p>
                          </div>

                          {/* Date */}
                          <div className="shrink-0">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-400 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-400/30 group-hover:text-neutral-300">
                              <FiCalendar
                                size={13}
                                className="text-violet-400"
                              />

                              <span>
                                {item.startDate} - {item.endDate}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-transparent" />

                        {/* Description */}
                        {item.description && (
                          <p className="max-w-3xl text-sm leading-7 text-neutral-400 sm:text-[15px]">
                            {item.description}
                          </p>
                        )}

                        {/* Technologies */}
                        {item.technologies?.length > 0 && (
                          <div className="mt-7">
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                              Technologies
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((technology, techIndex) => (
                                <motion.span
                                  key={technology}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay: index * 0.1 + techIndex * 0.03,
                                  }}
                                  className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-neutral-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200"
                                >
                                  {technology}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Bottom accent */}
                        <div className="mt-7 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                            <span className="h-1.5 w-3 rounded-full bg-cyan-400/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
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
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
