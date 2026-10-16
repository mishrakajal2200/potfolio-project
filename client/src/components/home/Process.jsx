import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiLayers,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const processSteps = [
  {
    number: "01",
    title: "Discuss",
    description:
      "We discuss your business, goals, requirements, timeline, and the problem you want the website or application to solve.",
    icon: FiMessageSquare,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I break the requirements into clear features, choose the right technical approach, and define the development workflow.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the application using clean, reusable components, responsive UI, reliable APIs, and maintainable code.",
    icon: FiCode,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and refinement, I help deploy the application and make sure everything is ready for real users.",
    icon: FiCheckCircle,
  },
];

function Process() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="My Process"
          title="From idea to a working product."
          description="A simple and transparent development process designed to keep projects organized, practical, and focused on your business goals."
        />

        <div className="relative mt-14">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-8 hidden h-px w-[calc(100%-54px)] bg-white/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  {/* Mobile Connector */}
                  {index !== processSteps.length - 1 && (
                    <div className="absolute left-[27px] top-16 h-[calc(100%+10px)] w-px bg-white/10 lg:hidden" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950 text-neutral-300 transition-all duration-300 hover:border-white/25 hover:text-white">
                    <Icon size={21} />
                  </div>

                  {/* Content */}
                  <div className="mt-6 pl-0">
                    <span className="text-xs font-semibold tracking-[0.2em] text-neutral-600">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Process;