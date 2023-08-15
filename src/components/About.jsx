/* eslint-disable no-unused-vars */

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from "../assets/Screenshot_20221217_032011.png";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt
            className="xs:w-[250px] w-full"
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
        >
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[50px] shadow-card"
            >
                <div className="bg-tertiary rounded-[50px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-2 text-secondary text-[21px] max-w-3xl leading-[30px]"
            >
                Accomplished Full Stack Developer and IT Analyst with over 10
                years of experience in designing, developing, and implementing
                applications using cutting-edge technologies. Adept at creating
                mobile-first responsive designs, managing version control via
                GIT, and expanding business opportunities through custom
                platform development. Passionate about leveraging hands-on
                expertise to excel in a challenging Full-stack Developer role.
            </motion.p>

            {/* Flex container for service cards and image */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-start">
                {/* Service Cards container */}
                <div className="w-full md:w-1/2 p-4">
                    <div className="mt-20 flex flex-wrap gap-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                index={index}
                                {...service}
                            />
                        ))}
                    </div>
                </div>

                {/* Image container */}
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={me}
                        alt="Your Name"
                        className=" rounded-[50px] w-full md:w-3/4 mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

ServiceCard.propTypes = {
    index: PropTypes.number.isRequired, // if the index is a number
    title: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired, // Adjust based on the expected type of icon
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
