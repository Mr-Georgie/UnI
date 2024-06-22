"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Budget } from "../budget-manager/create/zdata";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";

type TotalSelectedCostFunction = () => void;

interface Props {
    steps: number;
    items: Budget[];
    setItems: React.Dispatch<React.SetStateAction<Budget[]>>;
    totalSelectedCost: TotalSelectedCostFunction;
}

const Step2: React.FC<Props> = ({
    steps,
    items,
    setItems,
    totalSelectedCost,
}) => {
    const { toast } = useToast();

    const handleCostChange = (
        event: ChangeEvent<HTMLInputElement>,
        itemName: string
    ) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemName
                    ? { ...item, cost: Number(event.target.value) }
                    : item
            )
        );
    };

    const handleNameChange = (
        event: ChangeEvent<HTMLInputElement>,
        itemName: string
    ) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemName
                    ? { ...item, artist: event.target.value }
                    : item
            )
        );
    };

    return (
        <AnimatePresence>
            {steps === 2 && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 mx-6">
                        {items.filter((item) => item.selected).length !== 0 ? (
                            items
                                .filter((item) => item.selected)
                                .map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-12 gap-2"
                                    >
                                        <div className="col-span-2">
                                            <Input
                                                id="more"
                                                type="text"
                                                placeholder="e.g Travel Cost..."
                                                value={`${index + 1}.`}
                                                className=""
                                                disabled
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <Input
                                                id="more"
                                                type="text"
                                                placeholder="e.g Travel Cost..."
                                                value={item.name}
                                                onChange={(e) =>
                                                    handleNameChange(
                                                        e,
                                                        item.name
                                                    )
                                                }
                                                className=""
                                            />
                                        </div>
                                        <div className="col-span-4">
                                            <Input
                                                id="more"
                                                type="string"
                                                placeholder="e.g Travel Cost..."
                                                value={`${String(item.cost)}`}
                                                onChange={(e) =>
                                                    handleCostChange(
                                                        e,
                                                        item.name
                                                    )
                                                }
                                                className=""
                                            />
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="w-full text-center text-sm py-8">
                                <p>No item added to budget list yet</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full my-8 px-6 flex justify-between font-bold font-outfit">
                        <p className="">Total</p>
                        <p className="text-end">{`₦${totalSelectedCost()}`}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Step2;
