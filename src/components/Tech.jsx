/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    // return (
    //     <div className="flex flex-row flex-wrap justify-center gap-10">
    //         {technologies.map((technology) => (
    //             <div className="w-28 h-28" key={technology.name}>
    //                 <BallCanvas icon={technology.icon} />
    //             </div>
    //         ))}
    //     </div>
    // );
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    // Conditionally render the balls, skipping the first two on mobile
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) =>
                // Use the ternary operator for conditional rendering
                isMobile && index < 2 ? null : (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                )
            )}
        </div>
    );
};

const WrappedTech = SectionWrapper(Tech, "");

export default WrappedTech;
