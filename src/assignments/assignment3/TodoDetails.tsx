import { useParams } from "react-router-dom";

export default function TodoDetails() {
    const { id } = useParams();
    return (
        <>
            <h1>Todo Details</h1>
            <div>Todo id: {id}</div>
        </>
    )
}