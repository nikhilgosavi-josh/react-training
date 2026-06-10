import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api";

export function useTodos(page: number, search: string, sort: string) {
    return useQuery({
        queryKey: ["todos", page, search, sort],
        queryFn: () => fetchTodos(page, search, sort),
        staleTime: 10000,
    });
}
