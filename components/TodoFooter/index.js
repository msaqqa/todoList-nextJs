import Link from "next/link";

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link href="/followers"><a>Followers</a></Link>
        </div>
    )
}

export default TodoFooter