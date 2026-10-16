
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function ProjectCard({ project, index = 0 }) {
  const technologies = project.technologies || [];

  const initials = (project.title || "Project")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.07, 0.28),
      }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b10] transition-colors duration-300 hover:border-violet-400/30"
    >
      {/* Preview */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#11111b]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center bg-gradient-to-br from-violet-950/50 via-[#11111b] to-cyan-950/30">
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-white/[0.04] shadow-xl shadow-violet-950/20">
              <span className="text-xl font-bold tracking-wider text-violet-200">
                {initials}
              </span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10]/70 via-transparent to-black/10" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur-md">
            <FiLayers className="text-violet-300" size={13} />
            {project.category || "Development"}
          </span>
        </div>

        {/* Status */}
        {project.status && (
          <div className="absolute bottom-4 right-4">
            <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-md">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Project number and label */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Selected project
          </span>

          <span className="font-mono text-xs text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-[22px]">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-400">
          {project.shortDescription ||
            project.description ||
            "A web application built with modern technologies."}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((technology, techIndex) => (
                <span
                  key={technology}
                  className={`rounded-md border px-2.5 py-1.5 text-[11px] font-medium ${
                    techIndex === 0
                      ? "border-violet-400/20 bg-violet-400/[0.08] text-violet-200"
                      : "border-white/[0.08] bg-white/[0.025] text-neutral-400"
                  }`}
                >
                  {technology}
                </span>
              ))}

              {technologies.length > 4 && (
                <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-[11px] text-neutral-500">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions pinned to bottom */}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5 mt-6">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Case study
            <FiArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-white/25 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Live demo
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
