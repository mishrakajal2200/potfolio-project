
import { motion } from "framer-motion";

function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className="relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300"
          >
            {/* Active Background */}
            {isActive && (
              <motion.span
                layoutId="active-project-filter"
                className="absolute inset-0 rounded-xl bg-white"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* Button Text */}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isActive
                  ? "text-neutral-950"
                  : "text-neutral-500 hover:text-white"
              }`}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;

