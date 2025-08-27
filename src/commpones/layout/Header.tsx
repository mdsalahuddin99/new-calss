import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { themeHendler } from "../../Utils/themeHendler";

function Header() {
  const [theme, setTheme] = useState("light-theme");

  const clickHandler = () => {
    setTheme((prev) => {
      if (prev === "dark-theme") {
        return "light-theme";
      } else {
        return "dark-theme";
      }
    });
  };

  useEffect(() => {
    themeHendler(theme);
  }, [theme]);

  return (
    <header className="py-4 border-b border-b-gray-500 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <span className="font-bold text-2xl dark:text-white text-theme">
            Sell Book 
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={clickHandler}
            className="p-2 border border-gray-500 rounded-md cursor-pointer"
          >
            <MdOutlineLightMode className="dark:text-white" />
          </button>
          <button className="p-2 border border-gray-500 rounded-md cursor-pointer">
            <MdOutlineShoppingCart className="dark:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
