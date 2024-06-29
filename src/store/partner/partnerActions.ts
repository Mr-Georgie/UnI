import { Dispatch } from "redux";

export const invitePartner = async (email: string) => {
    try {
        const response = await fetch("/api/invite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
    }
};