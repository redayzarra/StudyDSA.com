import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

interface Props {
  size?: number;
  className?: string;
}

const SocialLinks = ({ size = 25, className }: Props) => {
  return (
    <div
      className={cn(
        "text-neutral-500 flex items-center justify-center space-x-8",
        className
      )}
    >
      <Link className="hover:text-white hover:-translate-y-1 transition-all duration-200"
        href="https://www.youtube.com/@TodaysReDay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={size} />
      </Link>
      <Link className="hover:text-white hover:-translate-y-1 transition-all duration-200"
        href="https://www.linkedin.com/company/studydsa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={size} />
      </Link>
      <Link className="hover:text-white hover:-translate-y-1 transition-all duration-200"
        href="https://github.com/redayzarra/StudyDSA.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={size} />
      </Link>
      <Link className="hover:text-white hover:-translate-y-1 transition-all duration-200"
        href="https://www.linkedin.com/company/studydsa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={size} />
      </Link>
    </div>
  );
};

export default SocialLinks;
