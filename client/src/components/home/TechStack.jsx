
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
} from "react-icons/fi";




import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiTypescript,
  SiVite,
  SiBootstrap,
  SiJsonwebtokens,
  SiFirebase,
  SiRedis,
  SiNextdotjs,
  SiSass,
  SiFigma,
  SiNpm,
  SiLinux,
  SiNetlify,
  SiRender,
} from "react-icons/si";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import {
  skillCategories,
  coreTechnologies,
} from "../../data/skills";

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiServer,
  Database: FiDatabase,
  "Deployment & Tools": FiTool,
};

const skillIcons = {
  React: SiReact,
  "React.js": SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  HTML5: SiHtml5,
  CSS: FiCode,
CSS3: FiCode,
  Tailwind: SiTailwindcss,
  TailwindCSS: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  "Redux Toolkit": SiRedux,
  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  AWS: FiServer,
  Postman: SiPostman,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Bootstrap: SiBootstrap,
  JWT: SiJsonwebtokens,
  "JSON Web Token": SiJsonwebtokens,
  Firebase: SiFirebase,
  Redis: SiRedis,
  "Next.js": SiNextdotjs,
  Sass: SiSass,
  Figma: SiFigma,
  npm: SiNpm,
  Linux: SiLinux,
  Netlify: SiNetlify,
  Render: SiRender,
};

function TechStack() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute -right-48 top-1/3 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-250px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Subtle background grid */}
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
          eyebrow="Technology"
          title="The tools I use to build modern web applications."
          description="A practical full-stack toolkit focused on building responsive interfaces, reliable APIs, secure applications, and scalable business solutions."
        />

        {/* Technology Categories */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.title] || FiCode;

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className="h-full rounded-[28px] bg-gradient-to-br from-violet-500/25 via-blue-500/15 to-cyan-400/25 p-[1px] transition-all duration-500 group-hover:from-violet-400/60 group-hover:via-blue-400/50 group-hover:to-cyan-300/60">
                  <div className="relative h-full overflow-hidden rounded-[27px] bg-[#0b0b10]/95 p-6 backdrop-blur-xl sm:p-7">
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                    <div className="relative z-10">
                      {/* Category Header */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 text-violet-300 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-300">
                            <Icon size={20} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent">
                                {String(categoryIndex + 1).padStart(2, "0")}
                              </span>

                              <span className="h-1 w-1 rounded-full bg-neutral-700" />

                              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
                                Technology
                              </span>
                            </div>

                            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                          <FiArrowUpRight size={17} />
                        </div>
                      </div>

                      {/* Category Description */}
                      <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400">
                        {category.description}
                      </p>

                      <div className="my-6 h-px bg-gradient-to-r from-violet-500/30 via-blue-500/15 to-transparent" />

                      {/* Individual Skill Logo Cards */}
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skillIcons[skill.name] || FiCode;

                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{
                                duration: 0.35,
                                delay: skillIndex * 0.04,
                              }}
                              className="group/skill relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/[0.06]"
                            >
                              {/* Hover glow */}
                              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-500/0 blur-2xl transition-all duration-300 group-hover/skill:bg-violet-500/20" />

                              <div className="relative z-10">
                                {/* Technology Logo */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-neutral-900 text-2xl text-neutral-200 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-indigo-400/20 group-hover/skill:bg-indigo-500/10">
                                  <SkillIcon
                                    aria-hidden="true"
                                    title={skill.name}
                                  />
                                </div>

                                {/* Technology Name */}
                                <h4 className="mt-4 truncate text-sm font-semibold text-neutral-200 transition-colors group-hover/skill:text-white">
                                  {skill.name}
                                </h4>

                                {/* Skill Level */}
                                <div className="mt-2 flex items-center gap-2">
                                  <span
                                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                      skill.level === "Learning"
                                        ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                                        : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                                    }`}
                                  />

                                  <span className="truncate text-[10px] font-medium uppercase tracking-wider text-neutral-500 transition-colors group-hover/skill:text-violet-300">
                                    {skill.level}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Bottom Accent */}
                      <div className="mt-7 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                          <span className="h-1.5 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
                        </div>

                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-700 transition-colors group-hover:text-neutral-500">
                          {category.skills.length} Skills
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-8 overflow-hidden rounded-[28px] p-[1px]"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30" />

          <div className="relative rounded-[27px] bg-[#0b0b10] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                    <span className="h-1.5 w-3 rounded-full bg-cyan-400" />
                  </div>

                  <p className="mt-4 bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-[10px] font-bold uppercase tracking-[0.2em] text-transparent">
                    Core Stack
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                    Technologies I work with regularly
                  </h3>
                </div>

                {/* Core Technology Pills */}
                <div className="flex flex-wrap gap-2">
                  {coreTechnologies.map((technology, index) => {
                    const CoreIcon = skillIcons[technology];

                    return (
                      <motion.span
                        key={technology}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.04,
                        }}
                        className="group/core inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-neutral-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-cyan-400/10 hover:text-white"
                      >
                        {CoreIcon ? (
                          <CoreIcon
                            aria-hidden="true"
                            className="text-sm"
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                        )}

                        {technology}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7 h-px bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default TechStack;