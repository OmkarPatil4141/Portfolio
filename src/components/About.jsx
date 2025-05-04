import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center gap-10'>
        {/* Left: Text content */}
        <motion.div variants={textVariant()} className='flex-1'>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a passionate software developer with hands-on experience in <strong>TypeScript</strong> and <strong>JavaScript</strong>, specializing in frameworks like <strong>React</strong> and <strong>Node.js</strong>. I focus on building scalable APIs and efficient server-side applications.
            <br /><br />
            I also have a strong interest in <strong>DevOps</strong> and <strong>cloud technologies</strong>, particularly <strong>AWS</strong>, where I enjoy automating deployments and optimizing infrastructure. As a recent graduate, I’m eager to apply my skills and continue learning in a fast-paced engineering environment.
          </motion.p>

          <div className='mt-10 flex gap-6 flex-wrap'>
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </motion.div
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className='flex-shrink-0'
        >
          <div className='green-pink-gradient p-[3px] rounded-full w-[280px] h-[280px] md:w-[320px] md:h-[320px] shadow-lg'>
            <div className='bg-tertiary rounded-full w-full h-full overflow-hidden'>
              <img
                src={profile}
                alt='Omkar Patil'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
