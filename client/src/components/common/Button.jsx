import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const variantStyles = {
  primary:
    "bg-white text-neutral-950 hover:bg-neutral-200",

  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",

  outline:
    "border border-neutral-700 text-neutral-300 hover:border-white/30 hover:text-white",

  dark:
    "bg-neutral-900 text-white hover:bg-neutral-800",
};

const sizeStyles = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon = true,
  iconPosition = "right",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:pointer-events-none disabled:opacity-50";

  const styles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  const Icon = icon ? FiArrowUpRight : null;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <Icon
          size={17}
          className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <Icon
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  // Internal React Router link
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {content}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;