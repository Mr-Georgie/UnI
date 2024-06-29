"use client";

import Footer from "./footer";
import StepOne from "./step-one";
import Image from "next/image";
import { useEffect, useState } from "react";
import StepTwo from "./step-two";
import Header from "./header";
import StepThree from "./step-three";
import Done from "./done";

function MainComponent() {
    const [isStepOneDone, setIsStepOneDone] = useState(false);
    const [isStepTwoDone, setIsStepTwoDone] = useState(false);
    const [isStepThreeDone, setIsStepThreeDone] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!isStepOneDone) {
            setWidth(25);
        } else if (isStepOneDone && !isStepTwoDone) {
            setWidth(50);
        } else if (isStepOneDone && isStepTwoDone && !isStepThreeDone) {
            setWidth(75);
        } else if (isStepOneDone && isStepTwoDone && isStepThreeDone) {
            setWidth(100);
        }
    }, [isStepOneDone, isStepTwoDone, isStepThreeDone]);

    return (
        <div className="h-full overflow-hidden">
            <Header />
            <div className="w-full">
                <div className="grid grid-cols-1 text-white">
                    <div
                        className=" bg-green-400 text-center h-1"
                        style={{
                            width: `${width}%`,
                            transition: "width 0.5s ease-in-out", // CSS transition for smooth animation
                        }}
                    ></div>
                </div>
            </div>
            {!isStepOneDone && <StepOne setIsStepOneDone={setIsStepOneDone} />}
            {isStepOneDone && !isStepTwoDone && (
                <StepTwo
                    setIsStepOneDone={setIsStepOneDone}
                    setIsStepTwoDone={setIsStepTwoDone}
                />
            )}
            {isStepOneDone && isStepTwoDone && !isStepThreeDone && (
                <StepThree
                    setIsStepTwoDone={setIsStepTwoDone}
                    setIsStepThreeDone={setIsStepThreeDone}
                />
            )}
            {isStepOneDone && isStepTwoDone && isStepThreeDone && <Done />}
        </div>
    );
}

export default MainComponent;
