"use client";

import { useState } from "react";

const ProgressComponent = () => {
    const [progress, setProgress] = useState(30);

    return (
        <div className="mt-8 lg:mt-4">
            {/* make the element span the entire screen and centered */}
            <div className="flex flex-col items-center">
                {/* set a fixed width of the 3 step process and make its position relative*/}
                <div className="w-[200px] h-[50px] sm:w-[250px] md:w-[300px] lg:w-[400px] lg:h-[100px] relative">
                    {/* design the line that passes through the entire process, adjust the value for 'top' and 'z' accordingly */}
                    <div className="h-[4px] w-full rounded-lg bg-black absolute top-[14px] z-0">
                        <div
                            className="h-full bg-blueshade"
                            style={{
                                width: `${progress}%`,
                                transition: "width 0.5s ease-in-out", // CSS transition for smooth animation
                            }}
                        ></div>
                    </div>

                    {/* this element will hold the numbering of the process positioning it in front of the line */}
                    <div className="absolute top-1 left-0 right-0 z-30">
                        {/* space the numbering evenly to span the entire width */}
                        <div className="flex justify-between text-white font-bold">
                            {/* style the numbering making it a full circle */}
                            {/* numbering 1 */}
                            <div className="flex flex-col items-center w-6">
                                <div className="h-6 w-6 rounded-full flex justify-center items-center bg-blueshade">
                                    <span className="">1</span>
                                </div>
                                <div className="text-black font-semibold py-3">
                                    SET
                                </div>
                            </div>

                            {/* numbering 2 */}
                            <div className="flex flex-col items-center w-6">
                                <div
                                    className={`h-6 w-6 rounded-full flex justify-center items-center ${
                                        progress >= 50
                                            ? "bg-blueshade"
                                            : "bg-black"
                                    }`}
                                >
                                    <span className="">2</span>
                                </div>
                                <div className="text-black font-semibold py-3">
                                    ESTIMATE
                                </div>
                            </div>

                            {/* numbering 3 */}
                            <div className="flex flex-col items-center w-6">
                                <div
                                    className={`h-6 w-6 rounded-full flex justify-center items-center ${
                                        progress === 100
                                            ? "bg-blueshade"
                                            : "bg-black"
                                    }`}
                                >
                                    <span className="">3</span>
                                </div>
                                <div className="text-black font-semibold py-3">
                                    CREATE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressComponent;
