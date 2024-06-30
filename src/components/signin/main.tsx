"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { SignInForm } from "./form";

function MainComp() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <SignInForm />
        </div>
    );
}

export default MainComp;
