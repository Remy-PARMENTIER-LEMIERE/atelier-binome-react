import "./ToDoCard.css";

interface DoTask {
    priority: string;
    task: string;
    priorityLevel: string;
}

interface tasksToDo {
    toDoCardProps: DoTask[];
    onTaskComplete: (index: number) => void; // Fonction passée par App.tsx
}

function ToDoCard({ toDoCardProps, onTaskComplete }: tasksToDo) {
    return (
        <section className="todo-card">
            <h2 className="todo-title">À faire</h2>
            <ul className="todo-tasks">
                {toDoCardProps.map((element: DoTask, index: number) => (
                    <li key={index} className={element.priorityLevel}>
                        <div className="task-content">
                            <h3>{element.priority}</h3>
                            <p>{element.task}</p>
                        </div>
                        <button
                            type="button"
                            className="complete-button"
                            onClick={() => onTaskComplete(index)} // Déclenche la fonction lorsqu'on clique
                        >
                            ✔️
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ToDoCard;

