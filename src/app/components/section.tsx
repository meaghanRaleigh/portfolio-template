// File: /src/components/Section.tsx
import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="bg-accent w-full py-20">
      <div className="max-w-6xl mx-auto px-6 animate-fade-in">
        {children}
      </div>
    </section>
  );
}
