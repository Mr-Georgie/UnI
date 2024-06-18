"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { SignupForm } from "./form";

function MainComp() {
    const [steps, setSteps] = useState<number>(1);

    // const handleNext = () => {
    //     setArcPercent((prev) => (prev >= 100 ? 100 : prev + 40));
    //     setSteps((prev) => (prev >= 4 ? 4 : prev + 1));
    // };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <SignupForm />
        </div>
    );
}

export default MainComp;
