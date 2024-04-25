import spoon from "../assets/spoon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import w1 from "../assets/welcome1.png";
import { Tilt } from "react-tilt";
import AboutUs from "./AboutUs";
import SpecialMenu from "./SpecialMenu";
import Chef from "./Chef";
import video from "../assets/meal.mp4";
import "../../src/index.css";
import { useRef, useState } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import Award from "./Award";
import Gallery from "./Gallery";
import FindUs from "./FindUs";

import logo from "../assets/logo.png";

const Home = () => {
  AOS.init();
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);

    if (!play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div>
      {/* Banner */}
      <div className="hero min-h-screen text-white font-bodoni">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <Tilt options={defaultOptions} style={{ height: 300, width: 280 }}>
              <img src={w1} className="w-[100%] ml-4 my-6" />
            </Tilt>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="p-6">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Chase the new flavour!
            </h1>
            <img src={spoon} className="w-[5%] mt-2 text-[#FFD700]" alt="" />
            <div className="w-[60%]">
              <h2 className="text-8xl mt-4 text-[#FFD700] font-bodoni font-medium">
                The Key
              </h2>
              <h2 className="text-8xl my-2 text-[#FFD700] font-bodoni font-medium">
                To Fine
              </h2>
              <h2 className="text-8xl my-2 text-[#FFD700] font-bodoni font-medium">
                Dinning
              </h2>
            </div>
            <p className="py-6 mt-6 w-[60%] text-xl">
              where luxury meets gastronomy. Indulge in an extraordinary dining
              experience with our exquisite menu <br /> and impeccable service.
              Join us for a culinary journey unlike any other.
            </p>
            <button className="btn bg-[#feee8e] text-black font-bold">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* About Us */}
      <AboutUs></AboutUs>
      {/* Special Menu */}
      <SpecialMenu></SpecialMenu>
      {/* Chef's word */}
      <Chef></Chef>
      {/* Video */}
      <div className="mx-auto mt-8 p-12 box relative">
        <video
          onClick={handlePlay}
          ref={videoRef}
          controls={false}
          src={video}
          type="video/mp4"
        ></video>
        {!play ? (
          <button
            className="play-button text-white absolute top-[50%] left-[50%] border-4 border-white rounded-full p-4"
            onClick={handlePlay}
          >
            <FaPlay />
          </button>
        ) : (
          <button
            className="pause-button text-white absolute top-[50%] left-[50%] border-4 border-white rounded-full p-4"
            onClick={handlePlay}
          >
            <FaPause />
          </button>
        )}
      </div>
      {/* Awards */}
      <Award></Award>
      {/* Gallery */}
      <Gallery></Gallery>
      {/* Find Us */}
      <FindUs></FindUs>
      {/* Newsletter */}
      <div className="font-bodoni mt-12 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-[#FFD700] mb-8">NewsLetter</h2>
        <img className="mb-8" src={logo} alt="" />
        <div className=" flex justify-center items-center">
          <input
            className="rounded-lg mr-4 text-xl  p-2"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className=" mt-4">
          <input
            className="rounded-lg mr-4 text-xl  p-2"
            placeholder="Email"
            type="email"
          />
        </div>
        <button className="btn mt-4 p-4 text-base font-medium text-black bg-[#FFD700] w-[30%]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Home;
