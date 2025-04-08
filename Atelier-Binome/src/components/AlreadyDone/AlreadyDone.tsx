import './AlreadyDone.css';

interface Task {
  priority: string;
  task: string;
  priorityLevel: string;
}

interface DoneTasks {
  doneTasksProp: Task[];
}

function AlreadyDone({ doneTasksProp }: DoneTasks) {
  return (
    <section className="already-done">
      <h2>Déjà fait</h2>
      <ul>
        {doneTasksProp.map((element: Task) => (
          <li className={element.priorityLevel} key={element.task}>
            <h3>{element.priority}</h3>
            <p>{element.task}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlreadyDone;
