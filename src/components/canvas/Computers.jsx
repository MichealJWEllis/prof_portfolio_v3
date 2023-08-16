/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    const meshRef = React.useRef();

    useFrame(() => {
        // Update the rotation for each frame
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.004; // Adjust the value to control the speed
        }
    });
    return (
        <mesh ref={meshRef}>
            <hemisphereLight intensity={1} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={2}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={10} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.5 : 0.8}
                position={isMobile ? [0, -3, -0.75] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 600px)");

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

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};
Computers.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default ComputersCanvas;
