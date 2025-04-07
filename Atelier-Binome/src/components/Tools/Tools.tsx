import './Tools.css';
import { useState, ChangeEvent, FormEvent } from 'react';

interface TaskToDo {
  priority: string,
  task: string,
  priorityLevel: string
}

interface StateSetter {
  currentToDoList: TaskToDo[]
  setNewToDo: (currentToDoList:TaskToDo[]) => void,
}


function Tools({ setNewToDo, currentToDoList }: StateSetter) {

  const [newToDoPriority, setNewToDoPriority] = useState("");
  const [newToDoTask, setNewToDoTask] = useState("");
  const [newToDoPriorityLevel, setNewToDoPriorityLevel] = useState("");

  
  const handleChangePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewToDoPriority(e.target.value);
    if (e.target.value === "Urgent") {
      setNewToDoPriorityLevel("high-priority")
    } else if (e.target.value === "Faire dans la journée") {
      setNewToDoPriorityLevel("medium-priority")
    } else if (e.target.value === "Peut attendre") {
      setNewToDoPriorityLevel("low-priority")
    }
  }

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewToDoTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewToDo([ {priority:newToDoPriority, task:newToDoTask, priorityLevel:newToDoPriorityLevel}, ...currentToDoList ]);
    setNewToDoPriority("");
    setNewToDoTask("");
  }


  return (
    <section className="tools">
      <h3>Nouvelle tâche</h3>
      <form action=""  onSubmit={handleSubmit}>
        <select name="priority" id="priority-selector" value={newToDoPriority} onChange={handleChangePriority} required>
          <option value="">-- Choisissez une priorité --</option>
          <option value="Urgent">Urgent</option>
          <option value="Faire dans la journée">Faire dans la journée</option>
          <option value="Peut attendre">Peut attendre</option>
        </select>
        <textarea name="task" id="task-input" rows={3} maxLength={100} placeholder="Ce dont vous devez vous souvenir" value={newToDoTask} onChange={handleChangeTextarea} required></textarea>
        <button type="submit">Créer</button>
      </form>
    </section>
  )
}

export default Tools;