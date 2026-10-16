
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import { socialLinks } from "../../data/navigation";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.platform];

        if (!Icon) {
          return null;
        }

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${social.label}`}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <Icon
              size={17}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span>{social.label}</span>

            <FiArrowUpRight
              size={14}
              className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;

