/* eslint-disable react/no-unescaped-entities */
import chef from "../assets/chef.png";
import quote from "../assets/quote.png";
import spoon from "../assets/spoon.png";
import sign from "../assets/sign.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Chef = () => {
  AOS.init();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="mx-auto min-h-screen text-white font-bodoni flex flex-col lg:flex-row justify-center items-center mt-8"
    >
      <div className="w-[45%]">
        <img className="w-[80%]" src={chef} alt="chef" />
      </div>
      <div className="w-[45%] mt-4">
        <p className="text-3xl mb-2">Chef's Word</p>
        <img className="mb-4" src={spoon} />
        <h2 className="text-6xl text-[#feee8e] my-8">What We Believe In</h2>
        <p className="text-xl leading-9">
          <sup>
            <img className="inline-flex w-[5%]" src={quote} alt="quote" />
          </sup>
          Welcome to Oven, where culinary excellence meets the warmth of home
          cooking. As Chef Marcus Fitzgerald, I am thrilled to invite you to
          experience our restaurant's unique blend of tradition and innovation.
          At Oven, we believe that every dish tells a story, weaving together
          the finest ingredients with skillful technique to create unforgettable
          flavors. From our signature wood-fired pizzas to our decadent
          desserts, each dish is crafted with passion and precision, reflecting
          our commitment to quality and authenticity. Join us at Oven and embark
          on a culinary journey that delights the senses and nourishes the soul.
        </p>
        <h2 className="text-2xl mt-8">Your's Beloved</h2>
        <p className="text-xl mt-2 mb-4">Chef Kevin Luo</p>
        <img src={sign} alt="sign" />
      </div>
    </div>
  );
};

export default Chef;
