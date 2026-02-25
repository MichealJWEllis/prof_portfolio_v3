/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects, workProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import webIcon from "../assets/web.png";
import Tooltip from "@mui/material/Tooltip";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_site_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    {image ? (
                        <img
                            src={image}
                            alt="project_image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    ) : (
                        <div className="w-full h-full rounded-2xl bg-tertiary flex items-center justify-center">
                            <p className="text-secondary text-[12px]">
                                Screenshot coming soon
                            </p>
                        </div>
                    )}

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        {source_code_link && (
                            <Tooltip
                                title="View Source Code on GitHub"
                                arrow
                                placement="top"
                            >
                                <div
                                    onClick={() =>
                                        window.open(source_code_link, "_blank")
                                    }
                                    className="cursor-pointer"
                                >
                                    <div
                                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                                        style={{ marginRight: "5px" }}
                                    >
                                        <img
                                            src={github}
                                            alt="source code"
                                            className="w-1/2 h-1/2 object-contain"
                                        />
                                    </div>
                                </div>
                            </Tooltip>
                        )}

                        {live_site_link && (
                            <Tooltip
                                title="View Live Site"
                                arrow
                                placement="top"
                            >
                                <div
                                    onClick={() =>
                                        window.open(live_site_link, "_blank")
                                    }
                                    className="cursor-pointer"
                                >
                                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                                        <img
                                            src={webIcon}
                                            alt="live site"
                                            className="w-1/2 h-1/2 object-contain"
                                        />
                                    </div>
                                </div>
                            </Tooltip>
                        )}
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-[grey] text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
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
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-[grey] text-[17px] max-w-3xl leading-[30px]"
                >
                    A showcase of personal projects and professional work.
                    Personal projects include public source code and live demos.
                    Professional work reflects real production systems built at
                    Kwest Group — source code is proprietary.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>

            <motion.div variants={textVariant()} className="mt-20">
                <p className={`${styles.sectionSubText}`}>
                    Professional work
                </p>
                <h3 className="text-white font-bold text-[28px]">
                    Kwest Group — Production Systems.
                </h3>
                <p className="mt-3 text-[grey] text-[14px] max-w-2xl">
                    Internal tools built and maintained in production. Source
                    code is proprietary — screenshots coming soon.
                </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-7">
                {workProjects.map((project, index) => (
                    <ProjectCard
                        key={`work-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

ProjectCard.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
    image: PropTypes.string,
    source_code_link: PropTypes.string,
    live_site_link: PropTypes.string,
};

const WrapperWorks = SectionWrapper(Works, "projects");

export default WrapperWorks;
