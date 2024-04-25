import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import "animate.css";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="text-white font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className=" font-semibold" to="/menu">
          Menu
        </Link>
      </li>
      <li>
        <Link className=" font-semibold" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className=" font-semibold" to="/bookTable">
          Book Table(s)
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/contact">
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 py-3 backdrop-blur-lg text-xl font-bodoni">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburger className="text-white" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white font-bold animate__animated animate__lightSpeedInLeft animate__slow">
          Oven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-1 animate__animated animate__zoomInUp animate__slow">
          {links}
        </ul>
      </div>
      <div className="navbar-end animate__animated animate__slideInRight animate__slow">
        <Link to="/login">
          <a className="btn bg-[#feee8e] text-black font-bold mr-2">
            login
            <FiLogIn />
          </a>
        </Link>
        <Link to="/reg">
          <a className="btn bg-[#feee8e] text-black font-bold">
            Register
            <FaRegRegistered />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
