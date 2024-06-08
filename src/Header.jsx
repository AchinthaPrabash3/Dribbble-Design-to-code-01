const Header = () => {
  const navData = ["product", "about us", "resources", "sustainability"];

  return (
    <header className="flex justify-between items-center py-5 px-12 border-b">
      <div className="flex items-center space-x-20">
        <h1 className="text-4xl italic font-bold capitalize">webel.</h1>
        <nav>
          <ul className="flex items-center space-x-8">
            {navData.map((data, index) =>
              index == 2 ? (
                <li
                  key={index}
                  className="text-xl first-letter:uppercase before:content-[''] before:size-2 before:bg-amber-500 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-3 before:rounded-full hover:cursor-pointer"
                >
                  {data}
                </li>
              ) : (
                <li
                  key={index}
                  className="text-xl first-letter:uppercase hover:cursor-pointer"
                >
                  {data}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      <a
        href="#"
        className="first-letter:uppercase text-xl text-amber-400 relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:bg-amber-400 after:right-0 after:rounded-full after:scale-x-0 hover:after:scale-x-100 transition-all after:duration-300"
      >
        contact us
      </a>
    </header>
  );
};

export default Header;
