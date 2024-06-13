import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* Discount Promo */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">We are</span> launching{" "}
          <span className="text-white">soon</span> on playstore
        </p>
      </div>

      {/* Heading */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Discover <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Your next</span>
        </h1>

        {/* Get Started */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        obsession
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Dive into an ever-expanding library of games. Find your next favorite, from hidden gems to blockbuster hits, all in one place
      </p>
    </div>

    {/* Right Side */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* Background */}
      <img
        src="https://cdn.discordapp.com/attachments/1147791800279515146/1250409177516474408/Picsart_24-06-12_16-48-57-745.png?ex=666ad5cb&is=6669844b&hm=b3b26a95def474112f4bb2b4b1fda0f6f679709892c013708457e1db2b08772a&"
        alt="hero"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* Gradient */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    {/* Get Started (Mobile) */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
