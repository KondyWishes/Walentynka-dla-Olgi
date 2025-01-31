const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center relative w-full">
      <img
        src="/images/kondy_serce.png"
        alt="<3"
        className="w-40 md:w-52 lg:w-64 rounded-lg transition-all duration-300 ease-in-out cursor-pointer drop-shadow-green"
      />
      <h1 className="header bottom-0 z-10 -translate-y-10 md:-translate-y-14 lg:-translate-y-20">
        Walentynki...
      </h1>
    </header>
  );
};

export default Header;
