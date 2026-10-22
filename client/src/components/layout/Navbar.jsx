
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import Button from "../common/Button";

import { navigationLinks } from "../../data/navigation";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    setIsMobileMenuOpen(false);

    if (link.type === "route") {
      return;
    }

    const hash = link.path.split("#")[1];

    if (!hash) {
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      return;
    }

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `/#${hash}`);
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="border-b border-indigo-300/15 bg-gradient-to-r from-slate-950/95 via-indigo-950/95 to-violet-950/95 shadow-lg shadow-indigo-950/20 backdrop-blur-2xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-neutral-950 transition-transform duration-300 group-hover:-translate-y-0.5">
                KM
              </span>

              <span className="hidden sm:block">
                <span className="block text-sm font-semibold tracking-tight text-white">
                  Kajal Mishra
                </span>

                <span className="block text-[11px] text-neutral-400">
                  MERN Stack Developer
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigationLinks.map((link) => {
                const isActive =
                  link.type === "route" &&
                  location.pathname === link.path;

                if (link.type === "section") {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => handleNavigation(link)}
                      className="rounded-lg px-3.5 py-2 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
  <a
    href="/resume.pdf"
    download="Kajal_resume.pdf"
    className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-indigo-100 transition-all duration-300 hover:border-indigo-300/40 hover:bg-white/10 hover:text-white"
  >
    Resume ↓
  </a>

  <Button
    to="/contact"
    size="sm"
    variant="secondary"
    icon={false}
  >
    Start a Project
  </Button>
</div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 transition-colors duration-300 hover:border-white/20 hover:text-white lg:hidden"
            >
              {isMobileMenuOpen ? (
                <FiX size={20} />
              ) : (
                <FiMenu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden border-b border-indigo-300/15 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 shadow-xl shadow-black/20 backdrop-blur-2xl lg:hidden"
            >
              <MobileMenu
                links={navigationLinks}
                onNavigate={handleNavigation}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;

