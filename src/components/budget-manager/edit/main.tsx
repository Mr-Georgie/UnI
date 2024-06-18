"use client";

import { useState } from "react";
import { Budget, budgetData } from "./zdata";
import { SelectItem } from "./selectItem";
import { SelectionList } from "./selectionList";
import Header from "../home/header";

const MainComp: React.FC = () => {
    const [items, setItems] = useState<Budget[]>(budgetData);

    const selectItem = (index: number) => {
        setItems((prevItems) =>
            prevItems.map((item, ind) =>
                index === ind ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const removeItem = (itemName: string) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.name !== itemName)
        );
    };

    return (
        <section className="px-1 sm:px-4 md:px-8 py-4 w-full overflow-y-hidden overflow-x-hidden">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
                <SelectItem
                    items={items}
                    setItems={setItems}
                    selectItem={selectItem}
                />
                <SelectionList
                    items={items}
                    setItems={setItems}
                    selectItem={selectItem}
                    removeItem={removeItem}
                />
            </div>
        </section>
    );
};

export default MainComp;
