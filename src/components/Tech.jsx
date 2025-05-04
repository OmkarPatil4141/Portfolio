import React from "react";
import Tilt from "react-parallax-tilt"; // ✅ updated import
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const SkillCard = ({ index, title, icon }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.05}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    className='xs:w-[180px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.6)}
      className='w-full bg-gradient-to-r from-red-500 via-orange-400 to-red-400 p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-4 px-8 min-h-[220px] flex justify-evenly items-center flex-col'>
      <img
  src={icon}
  alt={title}
  className='w-16 h-16 object-contain'
/>
        <h3 className='text-white text-[16px] font-semibold text-center mt-3'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology, index) => (
        <SkillCard
          key={technology.name}
          index={index}
          title={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
