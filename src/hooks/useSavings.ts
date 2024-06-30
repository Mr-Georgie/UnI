import { useQuery } from "react-query";
import axios from "axios";

const fetchSavings = async (budgetId: string) => {
    const { data } = await axios.get(`/api/savings/get?budgetId=${budgetId}`);
    return data;
};

export const useSavings = (budgetId: string) => {
    return useQuery(["savings", budgetId], () => fetchSavings(budgetId));
};
