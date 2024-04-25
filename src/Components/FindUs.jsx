import find from "../assets/findus.png";
import AOS from "aos";
import "aos/dist/aos.css";
const FindUs = () => {
  AOS.init();
  return (
    <div className="p-10 font-bodoni font-bold">
      <div
        className="hero rounded-lg min-h-screen"
        style={{
          backgroundImage: `url(${find})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="2000"
            className=""
          >
            <h1 className="mb-8 text-6xl font-bold text-[#feee8e]">Find Us</h1>
            <p className="mb-5 tex-3xl">123 Main Street, Anytown, USA, 12345</p>
            <p className="mb-5 tex-3xl">(555) 123-4567</p>
            <p className="mb-5 tex-3xl"> info@restaurantname.com</p>
            <p className="mb-5 tex-3xl">Monday-Friday: 11:00 AM - 10:00 PM</p>
            <p className="mb-5 tex-3xl">Saturday-Sunday: 10:00 AM - 11:00 PM</p>
            <p className="mb-5 tex-3xl">
              From Anytown Train Station: Walk south on Main Street for 5
              minutes. From Anytown Airport: Drive east on Highway 123 for 10
              miles, then turn left onto Main Street.
            </p>
            <button className="btn bg-[#feee8e] text-xl text-black mt-6">
              Find
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
