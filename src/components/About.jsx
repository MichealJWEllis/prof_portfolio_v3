/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { Tilt } from "react-tilt";
import me from "../assets/Gemini_Generated_Image_n66a5kn66a5kn66a.png";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ServiceCard = ({ index, title, description }) => {
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
                <div className="rounded-[50px] py-8 px-10 min-h-[180px] flex flex-col items-center justify-center gap-4">
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                    <div className="w-10 h-[3px] rounded-full green-pink-gradient" />
                    {description && (
                        <p className="text-[grey] text-[13px] text-center">
                            {description}
                        </p>
                    )}
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
                    Full Stack Developer with 10+ years across web development and IT support. I build
                    internal business applications with React, Node/Express, and MongoDB/SQL — with a
                    focus on enterprise identity (Entra ID, Auth0, SAML, OIDC/OAuth2), authorization design
                    (RBAC, permissions, UI guards), SharePoint/MSAL integrations, and business systems
                    engineering. Strong stakeholder communication and systems thinking in
                    manufacturing/operations environments.
                </motion.p>

                <img
                    src={me}
                    alt="Micheal Ellis"
                    className="hidden md:block rounded-[60px] w-1/4 mx-auto"
                />
            </div>

            <motion.p
                variants={fadeIn("", "", 0.3, 1)}
                className="mt-16 text-secondary text-[14px] uppercase tracking-widest"
            >
                Known for
            </motion.p>
            <div className="mt-4 flex flex-wrap gap-10">
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
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
