import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={`${styles.sectionText} text-center`}>Hit me Up!</h3>

        {/* Download Resume Button */}
        <div className="mt-10 text-center">
          <a
            // href="E:/OneDrive - FAST National University/samaha/WebDevelopment/portfoliothreejs/3d-portfolio/src/assets/SamahaBatoolResume.pdf" // Replace with the actual path to your resume
            href="./SyedaSamahaBatoolRizviResume.pdf" // Replace with the actual path to your resume
            download
            className="inline-block px-6 py-3 mb-6 text-lg font-semibold text-white bg-tertiary rounded-full transition-all duration-500 ease-in-out transform hover:bg-white hover:text-tertiary hover:scale-105"
          >
            Wanna See My Resume?
          </a>
        </div>

        {/* Social Links Section */}
        <div className="mt-10 text-center">
          <div className="flex justify-center gap-6">
            <a
              href="mailto:samahabatool7@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white transition-all duration-500 ease-in-out transform hover:bg-white hover:text-tertiary hover:scale-150"
              title="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="https://github.com/samaha-rizvi-4578"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white transition-all duration-500 ease-in-out transform hover:bg-white hover:text-tertiary hover:scale-150"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/samaha-batool/"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white transition-all duration-500 ease-in-out transform hover:bg-white hover:text-tertiary hover:scale-150"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");