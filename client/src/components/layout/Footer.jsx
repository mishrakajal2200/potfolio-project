
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import Container from "../common/Container";

import {
  navigationLinks,
  socialLinks,
  footerServiceLinks,
} from "../../data/navigation";

function Footer() {
  const navigate = useNavigate();

  const handleSectionClick = (event, href) => {
    const hash = href.split("#")[1];

    if (!hash) {
      return;
    }

    event.preventDefault();

    if (window.location.pathname !== "/") {
      navigate(href);
      return;
    }

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
    }
  };

  const getSocialIcon = (platform) => {
    if (platform === "github") {
      return <FiGithub size={16} />;
    }

    if (platform === "linkedin") {
      return <FiLinkedin size={16} />;
    }

    return null;
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07070a] text-white">
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-[-160px] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        {/* =========================================================
            TOP CTA
        ========================================================== */}
        <div className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                  Available for projects
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have an idea?
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                From React applications and e-commerce platforms to SaaS
                dashboards and backend APIs, I help turn business ideas into
                reliable web products.
              </p>
            </div>

            <Link
              to="/contact"
              className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-[0_15px_45px_rgba(139,92,246,0.2)]"
            >
              <span>Start a project</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-950/5 transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================== */}
        <div className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1fr] lg:gap-10">
          {/* =====================================================
              BRAND
          ====================================================== */}
          <div className="max-w-sm">
            <Link to="/" className="group inline-flex items-center gap-3">
              {/* Logo */}
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 text-sm font-bold text-white shadow-[0_8px_30px_rgba(124,58,237,0.2)] transition-transform duration-300 group-hover:-translate-y-1">
                <span className="relative z-10">KM</span>

                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>

              <span>
                <span className="block text-sm font-semibold text-white">
                  Kajal Mishra
                </span>

                <span className="mt-0.5 block text-[11px] text-neutral-600">
                  MERN Stack Developer
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-neutral-500">
              Building modern web applications, e-commerce platforms, SaaS
              dashboards, and reliable backend systems for growing businesses.
            </p>

            {/* Social buttons */}
            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-xs font-medium text-neutral-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:text-white"
                >
                  <span className="transition-colors duration-300 group-hover:text-violet-300">
                    {getSocialIcon(social.platform)}
                  </span>

                  {social.label}

                  <FiArrowUpRight
                    size={12}
                    className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Navigation
            </h3>

            <ul className="mt-6 space-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  {link.type === "section" ? (
                    <a
                      href={link.path}
                      onClick={(event) =>
                        handleSectionClick(event, link.path)
                      }
                      className="group inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              SERVICES
          ====================================================== */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Services
            </h3>

            <ul className="mt-6 space-y-3.5">
              {footerServiceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(event) =>
                      handleSectionClick(event, service.href)
                    }
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                  >
                    {service.label}

                    <FiArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Start a project
            </h3>

            <p className="mt-6 text-sm leading-6 text-neutral-500">
              Have a project in mind? Tell me what you're building and let's
              explore how I can help.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Get in touch

              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            {/* Email */}
            <a
              href="mailto:kajalmishra@example.com"
              className="group mt-6 flex items-center gap-2 text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-300"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-300">
                <FiMail size={14} />
              </span>

              <span className="truncate">kajalm.dev@gmail.com</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}
        <div className="relative flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kajal Mishra. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Designed & built with</span>

            <span className="font-medium text-violet-300">React</span>

            <span className="text-neutral-700">•</span>

            <span className="font-medium text-cyan-300">MERN</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

