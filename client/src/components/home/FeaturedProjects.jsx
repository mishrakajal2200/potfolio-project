
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { featuredProjects } from "../../data/projects";

function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute -right-48 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-[-220px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

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
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built for real-world use."
            description="A selection of full-stack applications focused on solving business problems through clean interfaces, reliable APIs, and scalable application architecture."
          />

          <div className="shrink-0">
            <Button to="/projects" variant="outline" size="sm">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="mt-16 space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* Gradient outer border */}
              <div className="rounded-[30px] bg-gradient-to-br from-violet-500/35 via-blue-500/15 to-cyan-400/35 p-[1px] transition-all duration-500 group-hover:from-violet-400/70 group-hover:via-blue-400/40 group-hover:to-cyan-300/70">
                <div className="relative overflow-hidden rounded-[29px] bg-[#0b0b10]/95 backdrop-blur-xl">
                  {/* Top glow */}
                  <div className="pointer-events-none absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-60" />

                  <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                    {/* =========================
                        PROJECT VISUAL
                    ========================== */}
                   
{/* PROJECT VISUAL */}
<div className="group/preview relative flex min-h-[340px] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#11111b] via-[#09090d] to-[#101522] p-4 sm:min-h-[430px] sm:p-6 lg:min-h-[520px] lg:p-7">
  {/* Ambient glow */}
  <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-violet-500/15 blur-[100px]" />
  <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />

  {/* Preview header */}
  <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.6)]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Project Preview
      </span>
    </div>

    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-neutral-400">
      {project.category}
    </span>
  </div>

  {/* Browser-style screenshot frame */}
  <div className="relative z-10 overflow-hidden rounded-xl border border-white/15 bg-[#0c0c12] shadow-2xl shadow-black/50 transition-all duration-500 group-hover/preview:-translate-y-1 group-hover/preview:border-violet-400/40">
    {/* Browser toolbar */}
    <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#15151d] px-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

      <div className="ml-3 flex min-w-0 flex-1 items-center justify-center rounded-md border border-white/[0.06] bg-black/20 px-3 py-1">
        <span className="truncate text-[10px] text-neutral-500">
          {project.slug}.app
        </span>
      </div>

      <FiExternalLink className="shrink-0 text-neutral-500" size={13} />
    </div>

    {/* Complete screenshot without cropping */}
    <div className="flex h-[240px] items-center justify-center overflow-hidden bg-[#09090d] sm:h-[320px] lg:h-[365px]">
      {project.image ? (
        <motion.img
          src={project.image}
          alt={`${project.title} full project screenshot`}
          loading="lazy"
          className="block h-full w-full object-contain object-top"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <FiLayers className="mb-4 text-violet-300" size={36} />

          <span className="text-4xl font-bold tracking-tight text-white/80">
            {project.title
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)}
          </span>

          <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Project preview coming soon
          </span>
        </div>
      )}
    </div>
  </div>

  {/* Bottom preview metadata */}
  <div className="relative z-10 mt-5 flex items-center justify-between gap-4">
    <div className="flex items-center gap-2 text-xs text-neutral-400">
      <FiLayers className="shrink-0 text-violet-300" size={14} />
      <span>Featured Project</span>
    </div>

    <span className="text-2xl font-bold tracking-tight text-white/20">
      {String(index + 1).padStart(2, "0")}
    </span>
  </div>
</div>


                    {/* =========================
                        PROJECT CONTENT
                    ========================== */}
                    <div className="relative flex flex-col justify-between p-6 sm:p-9 lg:p-12 xl:p-14">
                      {/* Decorative glow */}
                      <div className="pointer-events-none absolute -right-32 top-[-120px] h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

                      <div className="relative z-10">
                        {/* Status + year */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                              <FiCheckCircle
                                size={14}
                                className="text-emerald-300"
                              />
                            </span>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                              {project.status}
                            </span>
                          </div>

                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-neutral-500">
                            {project.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-7 max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
                          {project.title}
                        </h3>

                        {/* Gradient underline */}
                        <div className="mt-5 h-[2px] w-12 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-24" />

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-[15px]">
                          {project.shortDescription}
                        </p>

                        {/* Project highlights */}
                        {project.features?.length > 0 && (
                          <div className="mt-7">
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                              Key capabilities
                            </p>

                            <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                              {project.features
                                .slice(0, 6)
                                .map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-center gap-2.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400"
                                  >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />

                                    <span>{feature}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="mt-8">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                            Technology
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 7).map((technology) => (
                              <span
                                key={technology}
                                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-neutral-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="group/link inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
                          >
                            View Case Study

                            <FiArrowUpRight
                              size={16}
                              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>

                          {project.links?.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                            >
                              Live Project
                              <FiExternalLink size={15} />
                            </a>
                          )}
                        </div>

                        {/* Bottom accent */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                            <span className="h-1.5 w-4 rounded-full bg-cyan-400/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          </div>

                          <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-700">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-500/25 via-blue-500/15 to-cyan-400/25 p-[1px]">
            <div className="relative overflow-hidden rounded-[27px] bg-[#0b0b10] px-6 py-8 sm:px-9 sm:py-10">
              <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      More work
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Want to see{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      more projects?
                    </span>
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                    Explore the complete project collection, including
                    applications, dashboards, e-commerce systems, and
                    development work.
                  </p>
                </div>

                <Link
                  to="/projects"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/[0.08]"
                >
                  Explore All Projects

                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;
