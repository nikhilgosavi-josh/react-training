import useCopyToClickboard from "./useCopyToClickboard";

export default function TodoItem({ todo }: any) {

    const {
        isCopied,
        copyToClipboard,
    } = useCopyToClickboard(todo.task);

    return (
        <li key={todo.id}>
            <span>{todo.task}</span>
            <span>{todo.completed ? "Done" : "Pending"}</span>
            <span><button onClick={copyToClipboard}>{isCopied ? 'Copied' : "Copy"}</button></span>
        </li>
    )
}