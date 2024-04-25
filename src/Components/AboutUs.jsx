import { Link } from "react-router-dom";
import bg from "../assets/G.png";
import knife from "../assets/knife.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const AboutUs = () => {
  AOS.init();
  return (
    <div
      className="mx-auto min-h-screen text-[#FFD700] bg-no-repeat bg-center flex flex-col justify-center items-center lg:flex-row my-6 gap-6 font-bodoni font-semibold"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="p-6 lg:text-right"
      >
        <h2 className="mb-2 text-6xl font-bold">About Us</h2>

        <p className="text-white mb-8 text-3xl">
          Welcome to Oven! Indulge in exquisite cuisine crafted <br /> with
          passion and innovation. Join us for an unforgettable <br /> dining
          experience in the heart of oven.
        </p>
        <Link to="/about">
          <button className="btn bg-[#feeb7b] font-bold text-black text-xl">
            About us
          </button>
        </Link>
      </div>
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        className="animate__animated animate__bounceInUp animate__slower"
      >
        <img src={knife} alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="p-6 lg:text-left"
      >
        <h2 className="text-6xl font-bold mb-2">History</h2>

        <p className="text-white text-3xl mb-8">
          Oven: Where Tradition Meets Innovation. Since 1971 <br />, we have
          crafted culinary experiences that redefine taste. Join us <br />
          in celebrating our journey of flavor.
        </p>
        <Link to="/about">
          <button className="btn bg-[#feeb7b] font-bold text-black text-xl">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
