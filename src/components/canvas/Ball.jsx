/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} />
            
            <mesh castShadow receiveShadow scale={2.75}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#92B7CC"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

BallCanvas.propTypes = {
    icon: PropTypes.any.isRequired, // Replace 'any' with the actual expected type if possible
};

Ball.propTypes = {
    imgUrl: PropTypes.any.isRequired, // Replace 'any' with the actual expected type if possible
};

export default BallCanvas;
