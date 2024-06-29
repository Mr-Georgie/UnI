import { Dispatch } from "redux";
import { createBudget } from "./budgetSlice";

export const addBudget =
    (budget: string | null) => async (dispatch: Dispatch) => {
        try {
            if (budget) {
                dispatch(createBudget(JSON.parse(budget)));

                const response = await fetch(`/api/budget/add`, {
                    headers: {
                        "content-type": "application/json",
                    },
                    method: "POST",
                    body: budget,
                });

                if (response.ok) {
                    console.log("Budget added successfully");
                    console.log(response);
                    localStorage.clear();
                } else {
                    console.log(
                        "Failed to add budget. Status:",
                        response.status,
                        await response.json().then((resp) => resp.message)
                    );
                }
            } else {
                console.log("no budget to add");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
