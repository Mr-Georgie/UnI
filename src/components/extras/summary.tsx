import { ProgressBar } from "@tremor/react";
import React from "react";

function Summary() {
    return (
        <div className="border rounded-lg p-4 flex flex-col justify-between">
            <div>
                <h5 className="font-outfit font-semibold mb-4">
                    {"Summary | MyWedding24"}
                </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                <div className="flex flex-col gap-2">
                    <h3 className="font-outfit text-2xl font-bold">
                        {/* {valueFormatter(71465)} */}
                    </h3>
                    <h6 className="font-manrope text-sm">budget balance</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-outfit text-2xl font-bold">{"32%"}</h3>
                    <h6 className="font-manrope text-sm">
                        budget target covered
                    </h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-outfit text-2xl font-bold">{"5/12"}</h3>
                    <h6 className="font-manrope text-sm">
                        budget items covered
                    </h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-outfit text-2xl font-bold">
                        {/* {valueFormatter(225000)} */}
                    </h3>
                    <h6 className="font-manrope text-sm">total budget cost</h6>
                </div>
            </div>

            <ProgressBar
                value={32}
                className="mt-2 bg-white rounded"
                showAnimation
                color="gray"
            />
        </div>
    );
}

export default Summary;
