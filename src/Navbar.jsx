import logo from "./logo.svg";
import {useState, useEffect} from 'react'
import Links from "./Links";
import { RiMenuLine } from "react-icons/ri";
import {RxCross2} from 'react-icons/rx'
import SocialLinks from "./socialLinks";
import {links, social} from './data'

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      // Define your breakpoint here (e.g., 768px)
      const breakpoint = 768;

      // Check the screen width and update the menu state accordingly
      setshowMenu(window.innerWidth > breakpoint);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="nav-center container">
        <div className="header">
          <img src={logo} alt="logo" />
          <button
            className="hamburger"
            onClick={() => {
              setshowMenu(!showMenu);
            }}
          >
            {showMenu ? <RxCross2 /> : <RiMenuLine />}
          </button>
        </div>
        <div className="link-container">
          {showMenu && <Links links={links} /> }
        </div>

        <div>
          <SocialLinks social={social} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
