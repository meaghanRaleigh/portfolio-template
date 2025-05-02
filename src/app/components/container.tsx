// components/Container.tsx
export default function Container({
    children,
    className = '',
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`w-full px-6 sm:px-10 md:px-16 max-w-screen-xl mx-auto ${className}`}>
        {children}
      </div>
    );
  }
  