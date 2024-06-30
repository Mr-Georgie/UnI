"use client";

import { Button } from "../ui/button";
import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Props {
    setIsStepOneDone: React.Dispatch<SetStateAction<boolean>>;
    setIsStepTwoDone: React.Dispatch<SetStateAction<boolean>>;
    setIsStepThreeDone: React.Dispatch<SetStateAction<boolean>>;
    isStepOneDone: boolean;
    isStepTwoDone: boolean;
    isStepThreeDone: boolean;
}

const Footer: React.FC<Props> = ({
    isStepOneDone,
    isStepTwoDone,
    isStepThreeDone,
    setIsStepOneDone,
    setIsStepTwoDone,
    setIsStepThreeDone,
}) => {
    const router = useRouter();

    const createBudget = async () => {
        // const selectedBudget: CompiledBudget = {
        //     budgetList: items.filter((item) => item.selected),
        //     duration,
        //     balance: null,
        //     name: budgetName,
        // };

        // await localStorage.setItem("budget", JSON.stringify(selectedBudget));
        // await localStorage.setItem("showCongratsMessage", "Yes");

        router.push("/dashboard");
    };

    return (
        <footer role="banner" className="h-1/6 flex justify-center">
            <div className="w-full container p-2 ">
                {!isStepOneDone && (
                    <div className="flex justify-center">
                        <Button
                            className="w-full max-w-80"
                            onClick={() => setIsStepOneDone(true)}
                        >
                            Next
                        </Button>
                    </div>
                )}

                {isStepOneDone && !isStepTwoDone && (
                    <div className="flex justify-center gap-3">
                        <div className="w-full flex justify-end">
                            <Button
                                variant="outline"
                                className="w-full max-w-80"
                                onClick={() => setIsStepOneDone(false)}
                            >
                                Back
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button
                                className="w-full max-w-80"
                                onClick={() => setIsStepTwoDone(true)}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

                {isStepOneDone && isStepTwoDone && !isStepThreeDone && (
                    <div className="flex justify-center gap-3">
                        <div className="w-full flex justify-end">
                            <Button
                                variant="outline"
                                className="w-full max-w-80"
                                onClick={() => setIsStepTwoDone(false)}
                            >
                                Back
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button
                                className="w-full max-w-80"
                                onClick={() => setIsStepThreeDone(true)}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

                {isStepOneDone && isStepTwoDone && isStepThreeDone && (
                    <div className="flex justify-center">
                        <Button
                            className="w-full max-w-80"
                            onClick={() => createBudget()}
                        >
                            Go to Dashboard
                        </Button>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;

//min-w-80
