"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Budget } from "../budget-manager/create/zdata";
import { useToast } from "../ui/use-toast";

type SelectItemFunction = (index: number) => void;

interface Props {
    steps: number;
    items: Budget[];
    setItems: React.Dispatch<React.SetStateAction<Budget[]>>;
}

const Step1: React.FC<Props> = ({ steps, items, setItems }) => {
    const { toast } = useToast();

    const selectItem = (index: number) => {
        if (
            items.filter((item) => item.selected).length < 3 ||
            items[index].selected
        ) {
            setItems((prevItems) =>
                prevItems.map((item, ind) =>
                    index === ind ? { ...item, selected: !item.selected } : item
                )
            );
        } else {
            toast({
                description: "Please select just 3 for now",
            });
        }
    };

    return (
        <AnimatePresence>
            {steps === 1 && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 mx-6"
                >
                    {items.map((item, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            onClick={() => selectItem(index)}
                            className={`md:text-lg font-manrope md:p-4 rounded-2xl text-center ${
                                item.selected
                                    ? "bg-mix text-white hover:bg-mix hover:text-white"
                                    : ""
                            }`}
                        >
                            {item.name}
                        </Button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Step1;
