export default function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-block bg-primary text-white px-6 py-2 
      rounded-md font-semibold transition-all duration-200 hover:bg-secondary 
      focus:ring-2 focus:ring-accent focus:outline-none ${className}`}
    >
      {children}
    </a>
  );
}
