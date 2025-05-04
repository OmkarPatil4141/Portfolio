import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MAX_LENGTH = 200;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = description.length > MAX_LENGTH;
  const displayedText = isExpanded
    ? description
    : description.substring(0, MAX_LENGTH) + (shouldTruncate ? "..." : "");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.6)}>
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 400,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {displayedText}
            {shouldTruncate && (
              <button
                onClick={toggleDescription}
                className='ml-2 text-blue-400 underline text-[14px]'
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const renderProjectRows = () => {
    const rows = [];
    const perRow = 3; // Adjust this if needed for responsiveness

    for (let i = 0; i < projects.length; i += perRow) {
      const rowProjects = projects.slice(i, i + perRow);
      const isLastRow = i + perRow >= projects.length;

      rows.push(
        <div
          key={`row-${i}`}
          className={`flex flex-wrap gap-7 w-full ${
            isLastRow ? "justify-center" : "justify-start"
          }`}
        >
          {rowProjects.map((project, index) => (
            <ProjectCard
              key={`project-${i + index}`}
              index={i + index}
              {...project}
            />
          ))}
        </div>
      );
    }

    return rows;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of the projects that highlight my technical skills and
          hands-on experience. Each project includes a short description along
          with links to the source code and live demo. These real-world
          examples demonstrate my ability to build full-stack applications,
          solve complex problems, and deliver scalable, high-quality solutions
          using a range of modern technologies.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col gap-12'>
        {renderProjectRows()}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
