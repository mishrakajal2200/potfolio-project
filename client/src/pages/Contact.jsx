
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

import ContactForm from "../components/contact/ContactForm";
import SocialLinks from "../components/contact/SocialLinks";

function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      <Navbar />

      <main>
        {/* =========================================================
            PAGE HEADER
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#07070a] pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
            <div className="absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <Container>
            <div className="relative">
              <SectionHeading
                eyebrow="Let's Connect"
                title="Let's talk about your project."
                description="Have an idea, need a new web application, or want to improve an existing product? Tell me what you're working on and I'll get back to you."
              />

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1.5,
                }}
                className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-600"
              >
                <span>Start a conversation</span>
                <FiArrowDown size={13} />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CONTACT CONTENT
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#07070a] py-20 sm:py-24 lg:py-28">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-180px] top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
            <div className="absolute right-[-180px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
          </div>

          <Container>
            <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-20">
              {/* =====================================================
                  CONTACT INFORMATION
              ====================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                      Start a conversation
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Tell me what you need.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
                    Whether you need a website, e-commerce platform, SaaS
                    dashboard, API, or improvements to an existing application,
                    send me a few details about your project.
                  </p>
                </div>

                {/* Email card */}
                <a
                  href="mailto:kajalmishra@example.com"
                  className="group relative mt-9 block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04] hover:shadow-[0_15px_50px_rgba(124,58,237,0.12)]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.14]">
                      <FiMail size={19} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                        Email
                      </span>

                      <span className="mt-1 block truncate text-sm font-medium text-neutral-300 transition-colors group-hover:text-white sm:text-base">
                        kajalm.dev@gmail.com
                      </span>
                    </span>

                    <FiArrowUpRight
                      size={17}
                      className="ml-auto shrink-0 text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                    />
                  </div>
                </a>

                {/* Response card */}
                <div className="group relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.07] text-cyan-300">
                      <FiMessageCircle size={19} />
                    </span>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                        Response time
                      </p>

                      <p className="mt-1 text-sm text-neutral-400">
                        I usually respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-10">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                    Connect with me
                  </p>

                  <SocialLinks />
                </div>

                {/* Availability */}
                <div className="relative mt-10 overflow-hidden rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.035] p-6">
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

                  <div className="relative flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    </span>

                    <span className="text-sm font-semibold text-emerald-300">
                      Available for freelance projects
                    </span>
                  </div>

                  <p className="relative mt-3 text-sm leading-6 text-neutral-500">
                    Currently open to selected freelance development,
                    maintenance, and web application projects.
                  </p>
                </div>
              </motion.div>

              {/* =====================================================
                  CONTACT FORM
              ====================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="relative"
              >
                {/* Gradient glow behind form */}
                <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-cyan-500/20 opacity-70 blur-xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c10]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        Project inquiry
                      </p>
                    </div>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Send me a message.
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                      Share your project details, requirements, timeline, or
                      anything else that would help me understand what you're
                      looking to build.
                    </p>
                  </div>

                  {/* Form */}
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#07070a] py-20 sm:py-24 lg:py-28">
          {/* CTA glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
            <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[100px]" />
          </div>

          <Container>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-14 text-center shadow-2xl shadow-violet-950/10 sm:px-10 sm:py-18 lg:px-16"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute left-1/2 top-[-120px] h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[90px]" />

              {/* Decorative corner */}
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-violet-400/10 sm:right-10 sm:top-10" />
              <div className="absolute right-10 top-10 h-8 w-8 rounded-full border border-cyan-400/10 sm:right-14 sm:top-14" />

              <div className="relative">
                <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
                  <FiCheckCircle size={13} className="text-violet-300" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                    Ready when you are
                  </p>
                </div>

                <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Let's turn your idea into a{" "}
                  <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    working product.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                  From planning and development to deployment, I can help build
                  a reliable web solution around your business requirements.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-400">
                    React
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-400">
                    Node.js
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-400">
                    MongoDB
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-400">
                    REST APIs
                  </span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;

