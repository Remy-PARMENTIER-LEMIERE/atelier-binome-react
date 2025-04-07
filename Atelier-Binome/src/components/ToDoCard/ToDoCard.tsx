import "./ToDoCard.css";

function ToDoCard() {
    return (
        <section className="todo-card">
            <h2 className="todo-title">À faire</h2>
            <ul className="todo-tasks">
                <li className="todo-task">Nouvelle tâche 1</li>
                <li className="todo-task">Nouvelle tâche 2</li>
                <li className="todo-task">Nouvelle tâche 3</li>
            </ul>
        </section>
    );
}

export default ToDoCard;