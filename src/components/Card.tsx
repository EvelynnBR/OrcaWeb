import { twMerge } from "tailwind-merge";

type CardProps = React.ComponentProps<"section"> & {
  children: React.ReactNode;
};

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <section
      className={twMerge(
        `bg-white border-black shadow-[0_12px_32px_rgba(0,0,0,0.35)] rounded-xl`,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
