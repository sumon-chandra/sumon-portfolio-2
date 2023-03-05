import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* ******** Hero Header section ************* */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient rounded-full bg-[#915eff]" />
        </div>
        <div>
          <h2 className={`${styles.heroHeadText}`}>
            Hi I'm <span className="text-[#915eff]">Sumon</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern user interfaces and{" "}
            <br className=" md:hidden sm:block" />
            web applications.
          </p>
        </div>
      </div>
      {/* *************** Hero Computer Section ************** */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
