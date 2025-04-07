import "./ToDoCard.css";

interface DoTask {
    priority: string;
    task: string;
    priorityLevel: string;
}

interface TasksToDo {
    toDoCardProps: DoTask[];
}

function ToDoCard({ toDoCardProps }: TasksToDo) {
    return (
        <section className="todo-card">
            <h2 className="todo-title">À faire</h2>
            <ul className="todo-tasks">
                {toDoCardProps.map((element: DoTask) => (
                    <li className={element.priorityLevel} key={element.task}>
                        <h3>{element.priority}</h3>
                        <p>{element.task}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ToDoCard;