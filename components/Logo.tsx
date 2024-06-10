import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface Props {
  className?: string;
  size?: "default" | "lg";
}

export const LogoText = ({ size = "default", className }: Props) => {
  const imageSize = size === "lg" ? 30 : 18;
  return (
    <div className={`gap-x-1 flex items-center ${className}`}>
      <Image width={imageSize} height={imageSize} alt="StudyDSA.com Logo" src="/images/icon.png"/>
      <h1
        className={cn(
          "font-[700]",
          font.className,
          size === "lg" ? "text-4xl" : "text-xl"
        )}
      >
        StudyDSA
      </h1>
    </div>
  );
};

const Logo = ({ size }: Props) => {
  return (
    <Link href={"/"}>
      <LogoText size={size} />
    </Link>
  );
};

export default Logo;

