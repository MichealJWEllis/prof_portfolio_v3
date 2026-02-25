/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./laptop/scene.gltf");
    const screenTexture = useTexture("./desktop_pc/textures/Material.002_baseColor.png");
    const meshRef = React.useRef();

    useEffect(() => {
        computer.scene.traverse((child) => {
            if (child.isMesh) {
                if (child.name === "Object_12") {
                   
                    child.material.color.set("#ffffff");
                    child.material.needsUpdate = true;
                }
                if (child.name === "Object_6") {
                    child.material.emissive = new THREE.Color("grey");
                    child.material.emissiveIntensity = 0.1;
                    child.material.needsUpdate = true;
                }
            }
        });
    }, [computer.scene, screenTexture]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.004;
        }
    });

    if (isMobile) return null;
    return (
        <mesh ref={meshRef} position={[0, -0.5, 0]}>
            <hemisphereLight intensity={1} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={1.50}
                penumbra={1}
                intensity={2}
                castShadow
                shadowMapSize={1024}
            />
            <pointLight intensity={10} />
            <Center>
                <primitive
                    object={computer.scene}
                    scale={1}
                    rotation={[0.2, 0, 0]}
                />
            </Center>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
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
