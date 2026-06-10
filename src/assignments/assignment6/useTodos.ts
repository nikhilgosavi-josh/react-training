import { useQuery } from "@tanstack/react-query";
import { todoService } from "./todoService";

export function useTodos(page: number, search: string, sort: string) {
    return useQuery({
        queryKey: ["todos", page, search, sort],
        queryFn: () => todoService.fetchTodos(page, search, sort),
        placeholderData: (previousData) => previousData
    });
}
