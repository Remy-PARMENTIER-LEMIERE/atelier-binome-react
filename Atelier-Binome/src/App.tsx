
import './App.css'
import Header from "./components/Header/Header"
import ToDoCard from "./components/ToDoCard/ToDoCard"

const TasksToDo = [
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


  return (
    <>
      <Header />
      <ToDoCard />
    </>
  )
}

export default App
