import { useQuery } from "react-query";
import axios from "axios";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets/");
    return data;
};

export const useBudgets = () => {
    return useQuery("budgets", fetchBudgets);
};
