/* eslint-disable react/no-unescaped-entities */
import laurel from "../assets/laurels.png";
import spoon from "../assets/spoon.png";
import a1 from "../assets/award01.png";
import a2 from "../assets/award02.png";
import a3 from "../assets/award03.png";
import a4 from "../assets/award05.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Award = () => {
  AOS.init();
  return (
    <div className="hero mt-10 p-8 text-white font-bodoni">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          src={laurel}
          className=" rounded-lg shadow-2xl w-[40%]"
        />
        <div className="w-[50%]">
          <h2
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="font-bold mb-2 text-4xl"
          >
            Awards & Recognitions
          </h2>
          <img
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            src={spoon}
            alt="spoon"
          />
          <h1
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="text-4xl lg:text-8xl font-bold my-6 text-[#FFD700]"
          >
            Our Laurels
          </h1>
          <p
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="py-6 text-xl"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className="flex justify-center items-center gap-4"
              >
                <img src={a1} alt="a1" />
                <div>
                  <h2 className="font-bold mb-2 text-2xl text-[#FFD700]">
                    Michelin Star
                  </h2>
                  <p>
                    Recognizing culinary excellence and exceptional dining
                    experiences.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-right"
                data-aos-duration="2000"
                className="flex justify-center items-center gap-4"
              >
                <img src={a2} alt="a2" />
                <div>
                  <h2 className="font-bold mb-2 text-2xl text-[#FFD700]">
                    James Beard Award
                  </h2>
                  <p>
                    Celebrating outstanding achievement in the food and beverage
                    industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-5">
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className="flex justify-center items-center gap-4"
              >
                <img src={a3} alt="a3" />
                <div>
                  <h2 className="font-bold mb-2 text-2xl text-[#FFD700]">
                    {" "}
                    TripAdvisor Travelers' Choice Award
                  </h2>
                  <p>
                    Voted by travelers as one of the top restaurants in the
                    world.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-right"
                data-aos-duration="2000"
                className="flex justify-center items-center gap-4"
              >
                <img src={a4} alt="a4" />
                <div>
                  <h2 className="font-bold mb-2 text-2xl text-[#FFD700]">
                    Wine Spectator Award of Excellence:
                  </h2>
                  <p>
                    Honoring restaurants with outstanding wine selections and
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
