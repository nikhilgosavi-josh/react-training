import { useQuery } from "@tanstack/react-query";
import { useReducer, useState } from "react";
import { fetchTodos } from "./api";
import { initialState, reducer } from "./reducer";

export default function Asgn7() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { data, isLoading, error } = useQuery({
        queryKey: ["todos", state.page, state.search, state.sort],
        queryFn: () => fetchTodos(state.page, state.search, state.sort),
        staleTime: 10000,
    })

    return (
        <>
            <div>
                <span><input type="text" placeholder="search" value={state.search} onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })} /></span>
                <span>Sort
                    <select value={state.sort} onChange={(e) => dispatch({ type: "SET_SORT", payload: e.target.value })}>
                        <option value={"asc"} >Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                </span>
            </div>

            {isLoading ? (
                <>Loading...</>
            ) : error ? (
                <>Error while fetching data</>
            ) : (
                <ul>{data?.todos.map((todo: any) => (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        <span>{todo.completed ? "Done" : "Pending"}</span>
                    </li>
                ))}</ul>
            )}
            <div>
                <button onClick={() => dispatch({ type: "SET_PAGE", payload: state.page - 1 })} disabled={state.page === 1}>Previous</button>
                <button onClick={() => dispatch({ type: "SET_PAGE", payload: state.page + 1 })}>Next</button>
                <span>Page {state.page}</span>
            </div>
        </>
    )
}