"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Budget } from "../budget-manager/create/zdata";
import { useToast } from "../ui/use-toast";
import { ChangeEvent, useState } from "react";

type HandleSelectChangeFunction = (value: string) => void;
type HandleInputChangeFunction = (value: ChangeEvent<HTMLInputElement>) => void;

interface Props {
    steps: number;
    items: Budget[];
    duration: string;
    totalCost: string;
    budgetName: string;
    handleDurationChange: HandleSelectChangeFunction;
    handleNameChange: HandleInputChangeFunction;
}

const Step3: React.FC<Props> = ({
    steps,
    budgetName,
    handleNameChange,
    duration,
    handleDurationChange,
    totalCost,
}) => {
    const { toast } = useToast();
    const [invalidCostError, setInvalidCostError] = useState("");

    const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <AnimatePresence>
            {steps === 3 && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid gap-6 mt-8 mx-6"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="cost">Budget Total Cost</Label>
                        <Input
                            id="cost"
                            className="disabled:bg-white disabled:opacity-80"
                            onChange={handleCostChange}
                            value={totalCost}
                            disabled
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Budget Name</Label>
                        <Input
                            id="name"
                            placeholder="e.g MyWedding24"
                            value={budgetName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Select
                            defaultValue={duration}
                            onValueChange={handleDurationChange}
                        >
                            <SelectTrigger id="duration">
                                <SelectValue placeholder="Specify duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3">3 months</SelectItem>
                                <SelectItem value="6">6 months</SelectItem>
                                <SelectItem value="9">9 months</SelectItem>
                                <SelectItem value="12">1 year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* {`₦${totalSelectedCost()}`} */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Step3;
