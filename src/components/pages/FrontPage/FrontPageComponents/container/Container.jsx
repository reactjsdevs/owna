import cx from "classnames";

export const Container = ({
  children,
  bgColor,
  withBorder = true,
  className,
}) => {
  return (
    <section
      className={cx({
        "bg-white relative pb-4 md:pb-6 px-4 md:px-6": withBorder,
      })}
    >
      <div className={cx(bgColor, "relative z-10", className)}>
        <div className="container mx-auto">{children}</div>
      </div>
    </section>
  );
};

Container.Lame = ({ children, className }) => (
  <div className={cx("py-10 lg:py-28 px-4 lg:px-12", className)}>
    {children}
  </div>
);
