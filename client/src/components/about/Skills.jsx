
import { motion } from "framer-motion";
import { FiCheck, FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { skillCategories } from "../../data/skills";

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiServer,
  Database: FiDatabase,
  "Deployment & Tools": FiTool,
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl" />

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
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="The technologies I use to build modern web applications."
          description="A practical stack covering frontend development, backend systems, databases, APIs, and deployment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.title] || FiCode;

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className="rounded-[28px] bg-gradient-to-r from-violet-500/25 via-blue-500/20 to-cyan-400/25 p-[1px] transition-all duration-500 group-hover:from-violet-400/60 group-hover:via-blue-400/50 group-hover:to-cyan-300/60">
                  <div className="relative h-full overflow-hidden rounded-[27px] bg-[#0b0b10]/95 p-6 backdrop-blur-xl sm:p-7">
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-start gap-4">
                          {/* Category icon */}
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 text-violet-300 ring-1 ring-white/10 transition-all duration-300 group-hover:from-violet-500/30 group-hover:to-cyan-400/30 group-hover:text-cyan-300">
                            <Icon size={20} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent">
                                0{index + 1}
                              </span>

                              <span className="h-1 w-1 rounded-full bg-neutral-700" />

                              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
                                Stack
                              </span>
                            </div>

                            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        {/* Check badge */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-neutral-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                          <FiCheck size={15} />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400">
                        {category.description}
                      </p>

                      {/* Gradient divider */}
                      <div className="my-6 h-px bg-gradient-to-r from-violet-500/25 via-blue-500/15 to-transparent" />

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.08 + skillIndex * 0.04,
                            }}
                            className="group/skill flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 transition-all duration-300 hover:border-violet-400/30 hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-cyan-400/10"
                          >
                            {/* Gradient dot */}
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />

                            <span className="text-xs font-medium text-neutral-300 transition-colors duration-300 group-hover/skill:text-white">
                              {skill.name}
                            </span>

                            <span className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-600 transition-colors duration-300 group-hover/skill:text-violet-300">
                              {skill.level}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Bottom accent */}
                      <div className="mt-7 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                          <span className="h-1.5 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
                        </div>

                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-700 transition-colors duration-300 group-hover:text-neutral-500">
                          {category.skills.length} Technologies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
