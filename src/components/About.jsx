/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { Tilt } from "react-tilt";
import me from "../assets/Screenshot_20221217_032011.png";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
                <div className=" rounded-[50px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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
            {/* Image container */}

            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
                <a
                    href="https://www.linkedin.com/in/michealjwellissr/"
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon
                        style={{
                            marginRight: "10px",
                            fontSize: "40px",
                        }}
                    />
                </a>
                <a
                    href="https://github.com/MichealJWEllis"
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon style={{ fontSize: "40px" }} />
                </a>
            </motion.div>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-2 text-[grey] text-[21px] max-w-3xl leading-[30px]"
                >
                    Accomplished Full Stack Developer and IT Analyst with over
                    10 years of experience in designing, developing, and
                    implementing applications using cutting-edge technologies.
                    Adept at creating mobile-first responsive designs, managing
                    version control via GIT, and expanding business
                    opportunities through custom platform development.
                    Passionate about leveraging hands-on expertise to excel in a
                    challenging Full-stack Developer / software engineering
                    role.
                </motion.p>

                <img
                    src={me}
                    alt="Your Name"
                    className="hidden md:block rounded-[60px] w-1/4 mx-auto"
                />
            </div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
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
