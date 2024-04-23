import logo from "../assets/images/logo.svg";
import hamburgericon from "../assets/images/icon-hamburger.svg";
import closeicon from "../assets/images/icon-close.svg";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["product", "features", "pricing"];

  return (
    <header>
      <div className="flex items-center justify-between px-6 pt-8 md:p-0">
        <div className="w-6 md:w-full">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="inline-block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img src={closeicon} alt="close menu" />
          ) : (
            <img src={hamburgericon} alt="open menu" />
          )}
        </div>
        <div
          className={`${
            isOpen ? "fixed" : "hidden"
          } left-6 right-6 top-16 z-10 mt-6 rounded-md bg-white p-6 shadow-xl md:static md:mt-0 md:block md:bg-transparent md:p-0 md:shadow-none`}
        >
          <nav className="flex flex-col items-center justify-center font-BarlowCondensed font-bold uppercase tracking-wider text-VeryDarkBlue md:flex-row">
            {navItems.map((link, index) => (
              <a
                key={index}
                className="mt-6 block leading-none hover:border-b hover:border-VeryDarkBlue md:ml-10 md:mt-0 md:inline-block"
                href="#"
              >
                {link}
              </a>
            ))}
            <hr className="mt-6 w-full bg-GrayishBlue text-center md:mx-10 md:mt-0 md:h-1.5 md:w-1.5 md:rounded-full" />
            <a
              className="mt-6 block leading-none text-GrayishBlue hover:border-b-2 hover:border-GrayishBlue md:mt-0 md:inline-block"
              href="#"
            >
              login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
