import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  icon?: string;
  iconHover?: string;
  alt?: string;
  href?: string;
};
const variants = {
  primary: "bg-purple-500 text-white hover:bg-purple-700",
  secondary:
    "border-purple-500 border-2 text-purple-500 hover:border-purple-700 hover:text-purple-700",
  tertiary: "text-purple-500 hover:text-purple-700",
};

export default function RouterLink({
  children,
  variant = "primary",
  icon,
  iconHover,
  alt,
  href = "#",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <>
      <Link
        to={href}
        className={twMerge(
          `h-12 pl-4 pr-4 flex items-center group justify-center ${variants[variant]}  rounded-lg hover:cursor-pointer transition ease-linear gap-2 align-center`,
          className,
        )}
        {...props}
      >
        {icon && (
          <span className="relative size-5">
            <img
              src={icon}
              alt={alt}
              aria-hidden="true"
              className={`absolute inset-0 size-5 transition-opacity ${iconHover} ? "group-hover:opacity-0" : ""`}
            />

            {iconHover && (
              <img
                src={iconHover}
                alt={alt}
                aria-hidden="true"
                className="absolute inset-0 size-5 opacity-0 transition-opacity group-hover:opacity-100"
              />
            )}
          </span>
        )}
        {children}
      </Link>
    </>
  );
}
