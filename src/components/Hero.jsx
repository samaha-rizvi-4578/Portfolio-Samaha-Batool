import Position from "./Position";
import heroImage from "../assets/hero1.svg"; // Make sure the path is correct

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>

      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            Samaha Batool
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-12 sm:mt-20 ml-0 xs:ml-[-4vh] sm:ml-[-10vh] md:ml-[-12vh] lg:mt-20 2xl:mt-8">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            I'm all about automating the boring stuff <br /> and leveling up development with some next-level code.
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
