import { Poppins } from "next/font/google";
import Logo from "../Logo";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
});

const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <Logo />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
