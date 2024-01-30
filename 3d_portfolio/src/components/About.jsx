import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <em>Hello, I'm Nitish Pawar, a passionate and dedicated Full Stack Developer with a diverse skill set. My expertise lies in web development technologies, including HTML, CSS, JavaScript, React.js, and Java for Full Stack Development. I'm also proficient in Python and MySQL.</em><br />
        <br /><br/>
<strong>Professional Background</strong>
<br/><br/>
<em>"I had the privilege of working with Cisco Systems India Pvt. Ltd., where I gained valuable experience and further enriched my understanding of software development practices. Following that, I worked at CDAC INDIA in Hyderabad, where I honed my skills and contributed to various projects."</em> 
<br /><br /><br/>
<strong>Skills Snapshot</strong>
<u><br/>Languages</u><em>: HTML, CSS, JavaScript, React.js, Java, Python
<br/><u>Databases</u>: MySQL</em>
<br/>
<br/>
<br/>
<strong>What Drives Me</strong><br/>
<em>I am passionate about crafting seamless and user-friendly web experiences. My journey in the software development field has equipped me with problem-solving skills and a keen eye for detail. I enjoy staying up-to-date with the latest industry trends and am always eager to take on new challenges.</em>
<br /><br /><br/>
<strong>Let's Connect</strong><br/>
<em>I am enthusiastic about seeking a position that will allow me to leverage my skills to the fullest extent and make
substantial contributions to an organization's progress., feel free to reach out. Let's connect and create something amazing together!</em>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");