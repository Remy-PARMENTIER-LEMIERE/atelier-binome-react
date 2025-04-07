import './App.css'
import AlreadyDone from './components/AlreadyDone/AlreadyDone'
import Tools from './components/Tools/Tools'
import Header from "./components/Header/Header"
import ToDoCard from "./components/ToDoCard/ToDoCard"
import { useState } from 'react'

const doneTasks = [
  {
    priority: "Urgent",
    task: "Rendre le dossier Marconi",
    priorityLevel: "high-priority"
  },
  {
    priority: "Faire dans la journée",
    task: "Prendre RDN contrôle technique",
    priorityLevel: "medium-priority"
  },
  {
    priority: "Peut attendre",
    task: "Prendre RDV chez le Dentiste",
    priorityLevel: "low-priority"
  }
];


const tasksToDo = [
  {
    priority: "Urgent",
    task: "Rendre le dossier Marconi",
    priorityLevel: "high-priority"
  },
  {
    priority: "Faire dans la journée",
    task: "Prendre RDN contrôle technique",
    priorityLevel: "medium-priority"
  },
  {
    priority: "Peut attendre",
    task: "Prendre RDV chez le Dentiste",
    priorityLevel: "low-priority"
  }
];


function App() {
  const [tasksToDoProp, setTasksToDoProp] = useState(tasksToDo);

  return (
    <>
      <Header />
      <main>
        <ToDoCard toDoCardProps={tasksToDoProp} />
        <AlreadyDone doneTasksProp={doneTasks} />
      </main>
      <Tools setNewToDo={setTasksToDoProp} currentToDoList={tasksToDoProp} />
    </>
  )
}

export default App;
