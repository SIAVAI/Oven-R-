/* eslint-disable react/jsx-key */
import menu from "../assets/menu.png";
import bg from "../assets/overlaybg.png";
import spoon from "../assets/spoon.png";
import { RiSingleQuotesR } from "react-icons/ri";
import { TfiLineDashed } from "react-icons/tfi";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const SpecialMenu = () => {
  AOS.init();
  const [wines, setWines] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("wines.json")
      .then((res) => res.json())
      .then((data) => setWines(data));
    fetch("cocktails.json")
      .then((res) => res.json())
      .then((data) => setCocktails(data));
  }, []);
  return (
    <div className="mx-auto min-h-screen text-white mt-12 font-bodoni pt-10  p-6">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl font-bold mb-2">
          Menu that flies with your palate!
        </h2>
        <img src={spoon} alt="spoon" />
        <h2 className=" mt-8 text-8xl font-thin text-[#FFD700] lg:flex lg:justify-center lg:items-center lg:gap-6">
          <span className="flex justify-center items-center mb-3">
            Today
            <sup>
              <RiSingleQuotesR />
            </sup>
            s{" "}
          </span>{" "}
          Special
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row mt-6 font-bodoni">
        <div className="">
          <h2 className="text-6xl text-white font-bold mb-8 mt-6 text-center animate__animated animate__fadeInDownBig animate__slow">
            Wines & Beers
          </h2>
          <div>
            {wines.map((each) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="text-left text-3xl font-normal mb-6 p-6"
              >
                <div className="flex justify-start items-center gap-4">
                  <h2 className="text-white">{each.title}</h2>
                  <TfiLineDashed />
                  <TfiLineDashed />
                  <p>{each.price}</p>
                </div>
                <p>{each.tags}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="2000"
          className=""
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <img className="w-[100%]" src={menu} />
        </div>
        <div className="">
          <h2 className="text-6xl text-white font-bold mb-8 mt-6 text-center animate__animated animate__fadeInDownBig animate__slow">
            Cocktails
          </h2>
          <div>
            {cocktails.map((each) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="text-left text-3xl font-normal mb-6 p-6"
              >
                <div className="flex justify-start items-center gap-4">
                  <h2 className="text-white">{each.title}</h2>
                  <TfiLineDashed />
                  <TfiLineDashed />
                  <p>{each.price}</p>
                </div>
                <p>{each.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
