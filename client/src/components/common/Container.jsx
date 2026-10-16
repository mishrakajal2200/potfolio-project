function Container({
  children,
  as: Component = "div",
  size = "default",
  className = "",
}) {
  const sizeStyles = {
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    narrow: "max-w-5xl",
    small: "max-w-3xl",
  };

  return (
    <Component
      className={`mx-auto w-full ${sizeStyles[size]} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

export default Container;