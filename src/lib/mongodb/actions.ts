import { Budget } from "@/app/models/models";

export const setupBudgetAndSavings = async (budget: string | null) => {
    try {
        if (budget) {
            const response = await fetch(`/api/setup`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: budget, // Ensure body is JSON
            });

            console.log("API Response:", response);

            if (response.ok) {
                console.log("Budget added successfully");
                localStorage.removeItem("newBudget"); // Clear specific item instead of entire storage
            } else {
                const responseBody = await response.json();
                console.log(
                    "Failed to add budget. Status:",
                    response.status,
                    responseBody.message || "No message available"
                );
            }
        } else {
            console.log("No budget to add");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

export const setupPartner = async (partnerId: string | null) => {
    try {
        if (partnerId) {
            const response = await fetch(
                `/api/setup/partner?userId=${partnerId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "GET",
                }
            );

            console.log("API Response:", response);

            if (response.ok) {
                console.log("Partner added successfully");
            } else {
                const responseBody = await response.json();
                console.log(
                    "Failed to add partner. Status:",
                    response.status,
                    responseBody.message || "No message available"
                );
            }
        } else {
            console.log("No partner to add");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};
