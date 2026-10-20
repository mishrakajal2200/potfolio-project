
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function MobileMenu({
  links,
  onNavigate,
  onClose,
}) {
  const location = useLocation();

  return (
    <div className="px-5 py-5 sm:px-6">
      <nav className="space-y-1">
        {links.map((link, index) => {
          const isActive =
            link.type === "route" &&
            location.pathname === link.path;

          if (link.type === "section") {
            return (
              <motion.button
                key={link.label}
                type="button"
                onClick={() => onNavigate(link)}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.04,
                }}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-neutral-400 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}

                <FiArrowUpRight
                  size={15}
                  className="text-neutral-700"
                />
              </motion.button>
            );
          }

          return (
            <motion.div
              key={link.label}
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.2,
                delay: index * 0.04,
              }}
            >
              <Link
                to={link.path}
                onClick={onClose}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-white/[0.06] text-white"
                    : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.label}

                <FiArrowUpRight
                  size={15}
                  className={
                    isActive
                      ? "text-white"
                      : "text-neutral-700"
                  }
                />
              </Link>
            </motion.div>
          );
        })}
      </nav>

{/* Mobile CTA */}
<motion.div
  initial={{
    opacity: 0,
    y: 10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.25,
    delay: links.length * 0.04,
  }}
  className="mt-5 space-y-3 border-t border-white/10 pt-5"
>
  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download="Kajal-Mishra-Resume.pdf"
    onClick={onClose}
    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3.5 text-sm font-semibold text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
  >
    Download Resume
    <FiArrowUpRight size={16} />
  </a>

  {/* Contact CTA */}
  <Link
    to="/contact"
    onClick={onClose}
    className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:bg-neutral-200"
  >
    Start a Project
    <FiArrowUpRight size={16} />
  </Link>
</motion.div>


    </div>
  );
}

export default MobileMenu;

