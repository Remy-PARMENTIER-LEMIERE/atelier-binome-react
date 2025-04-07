import './AlreadyDone.css'

interface Task {
  priority: string,
  task: string, 
  priorityLevel: string
}

interface DoneTasks {
  doneTasksProp: Task[]
}

function AlreadyDone({ doneTasksProp }: DoneTasks) {
  return (
    <section className="already-done">
      <h3>Déjà fait</h3>
      <ul>
      {doneTasksProp.map((element: Task) => (
          <li className={element.priorityLevel} key={element.task}>
            <h4>{element.priority}</h4>
            <p>{element.task}</p>
          </li>
      ))}
      </ul>
    </section>
  )
}

export default AlreadyDone;