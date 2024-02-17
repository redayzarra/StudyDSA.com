import Logo from "../Logo";

const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <Logo size="lg" />
      <p className="text-foreground font-medium text-sm">{label}</p>
    </div>
  );
};

export default Header;
