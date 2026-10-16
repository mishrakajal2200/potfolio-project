import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignmentStyles = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`flex max-w-3xl flex-col ${alignmentStyles[align]} ${className}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </span>
      )}

      {/* Title */}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;