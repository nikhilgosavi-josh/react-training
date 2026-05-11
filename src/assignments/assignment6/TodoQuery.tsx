import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchTodos } from "./api";

export default function Asgn6() {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

    const { data, isLoading, error } = useQuery({
        queryKey: ["todos", page, search, sort],
        queryFn: () => fetchTodos(page, search, sort),
        placeholderData: (previousData) => previousData
    })

    if (isLoading) return <>Loading...</>
    if (error) return <>Error while fetching data</>
    return (
        <>
            <div>
                <span><input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} /></span>
                <span>Sort
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value={"asc"} >Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                </span>
            </div>

            <ul>{data?.todos.map((todo: any) => (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <span>{todo.completed ? "Done" : "Pending"}</span>
                </li>
            ))}</ul>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
                <span>Page {page}</span>
            </div>
        </>
    )
}