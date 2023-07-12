import Logo from "@/components/logo";

const Header = () => {
  return (
    <header className="max-w-screen-xl w-full mx-auto p-5 lg:p-10">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
