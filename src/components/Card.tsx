type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <section className="bg-white border-black shadow-[0_12px_32px_rgba(0,0,0,0.35)] rounded-xl">
      {children}
    </section>
  );
}
