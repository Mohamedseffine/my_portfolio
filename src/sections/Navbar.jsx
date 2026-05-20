import { useState } from "react";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";
import * as constants from "../constants/index.js"


const NavItems = () => {
    return (
        <ul className=" nav-ul">
            {constants.navLinks.map((item)=>(
                <li key={item.id} className="nav-li">
                    <a href={item.href} className=" nav-li_a" onClick={()=>{}}>{item.name}</a>
                </li>
            ))}
            
        </ul>
    )
}


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-black/90 ">
      <div className=" max-w-7xl mx-auto">
        <div className=" flex justify-between items-center py-5 mx-auto c-space ">
          <a
            href="/"
            className=" text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Mohamed Seffine
          </a>
          <button onClick={toggleMenu} className=" text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" >
            <img
              src={isOpen ? close : menu}
              alt="menu icon"
              className=" w-6 h-6 cursor-pointer"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>


      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0" }`}>
        <nav className="p-5">
            <NavItems />
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
