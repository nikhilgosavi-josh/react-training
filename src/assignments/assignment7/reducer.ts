export const initialState = {
    search: "",
    sort: "asc",
    status: "all",
    page: 1
}

type Action =
    | { type: "SET_SEARCH", payload: string }
    | { type: "SET_SORT", payload: string }
    | { type: "SET_STATUS", payload: string }
    | { type: "SET_PAGE", payload: number }

export function reducer(
    state: typeof initialState,
    action: Action
) {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            };
        case "SET_SORT":
            return {
                ...state,
                sort: action.payload
            };
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload
            };
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            };

        default:
            return state;
    }
}