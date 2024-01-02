"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({ children, mode = "redirect", asChild }: Props) => {
  // Initialize router
  const router = useRouter();

  const onClick = () => {
    router.push("/login");
  };

  // Modal version
  if (mode == "modal") {
    return <div>Model Version</div>;
  }
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default LoginButton;
