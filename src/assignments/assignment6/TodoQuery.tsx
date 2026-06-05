import { useState } from "react";
import { useTodos } from "./useTodos";

export default function Asgn6() {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")
    const [sort, setSort] = useState<string>("")

    const { data, isLoading, error } = useTodos(page, search, sort);

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

            <ul>{data?.todos.map((todo) => (
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