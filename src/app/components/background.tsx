// File: /src/app/components/background.tsx
import Image from "next/image";
import heroImage from "../../../public/images/hero.png"; // Replace with your image path

export default function Background() {
  return (
    <>
      <Image
        src={heroImage}
        alt="Nature background"
        fill
        className="absolute inset-0 z-[-20] object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 z-[-10] bg-white/30 backdrop-blur-sm" />
    </>
  );
}
