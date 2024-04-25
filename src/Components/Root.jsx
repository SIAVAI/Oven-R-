import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import bg from "../assets/bg.png";
import Footer from "./Footer";
const Root = () => {
  return (
    <div
      className="min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
