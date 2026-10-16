
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

import { projects } from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-600">
              404
            </p>

            <h1 className="mt-3 text-3xl font-semibold">
              Project not found
            </h1>

            <p className="mt-3 text-sm text-neutral-500">
              The project you're looking for doesn't exist.
            </p>

            <div className="mt-7">
              <Button to="/projects" icon={false}>
                Back to Projects
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-neutral-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
          <Container>
            {/* Back Link */}
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
            >
              <FiArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Projects
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              {/* Intro */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-400">
                    {project.category}
                  </span>

                  <span className="text-xs text-neutral-600">
                    {project.year}
                  </span>

                  <span className="text-xs text-neutral-600">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
                    >
                      Visit Live Project
                      <FiExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <FiGithub size={16} />
                      View GitHub
                      <FiArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Project Meta */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
              >
                <div className="bg-neutral-950 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Role
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.role}
                  </p>
                </div>

                <div className="bg-neutral-950 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Duration
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.duration}
                  </p>
                </div>

                <div className="bg-neutral-950 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.category}
                  </p>
                </div>

                <div className="bg-neutral-950 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">
                    Year
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {project.year}
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Project Image */}
        <section className="bg-neutral-950 py-10 sm:py-14">
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="aspect-[16/8] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[16/8] items-center justify-center">
                  <span className="text-5xl font-semibold text-white">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}
                  </span>
                </div>
              )}
            </motion.div>
          </Container>
        </section>

        {/* Technologies */}
        <section className="bg-neutral-950 py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  Technology
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Built with modern tools.
                </h2>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="border-t border-white/10 bg-neutral-950 py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  Features
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  What was built.
                </h2>
              </div>

              <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: 10,
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
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="flex items-start gap-3 border-b border-white/10 pb-4"
                  >
                    <span className="mt-1 text-xs text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-neutral-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Challenges & Solutions */}
        <section className="bg-neutral-950 py-20 sm:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Development
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Challenges and solutions.
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Some of the key technical challenges addressed during the
                development of this project.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              {project.challenges.map((challenge, index) => (
                <motion.article
                  key={challenge.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
                        CHALLENGE {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-3 text-lg font-semibold text-white">
                        {challenge.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-neutral-500">
                        {challenge.description}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">
                        Solution
                      </p>

                      <p className="mt-3 text-sm leading-6 text-neutral-400">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="border-t border-white/10 bg-neutral-950 py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  Results
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  What the project achieved.
                </h2>
              </div>

              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div
                    key={result}
                    className="flex gap-4 border-b border-white/10 pb-5"
                  >
                    <span className="text-xs font-semibold text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-neutral-300">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="bg-neutral-950 py-20 sm:py-24">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center sm:px-10 sm:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Have a similar project?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let's build a solution for your business.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                If you're looking for a developer to build or improve a
                web application, I'd be happy to discuss your requirements.
              </p>

              <div className="mt-8 flex justify-center">
                <Button to="/contact">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;

