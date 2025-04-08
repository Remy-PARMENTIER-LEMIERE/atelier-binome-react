import './App.css';
import AlreadyDone from './components/AlreadyDone/AlreadyDone';
import Tools from './components/Tools/Tools';
import Header from "./components/Header/Header";
import ToDoCard from "./components/ToDoCard/ToDoCard";
import { useState } from 'react';




function App() {
  const tasksToDoDemo = [
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
  const [tasksToDoProp, setTasksToDoProp] = useState(tasksToDoDemo);

  const [doneTasks, setDoneTasks] = useState<{
    priority: string;
    task: string;
    priorityLevel: string;
  }[]>([]);;

  // Fonction pour déplacer une tâche de "À faire" vers "Déjà fait"
  const moveTaskToDone = (index: number) => {
    const taskToMove = tasksToDoProp[index]; //Récupère la tâche à déplacer
    setDoneTasks([...doneTasks, taskToMove]); // Ajoute la tâche aux tâches terminées
    setTasksToDoProp(tasksToDoProp.filter((_, i) => i !== index)); // Retire la tâche des tâches "à faire"
  };

  return (
    <>
      <Header />
      <main>
        <ToDoCard toDoCardProps={tasksToDoProp} onTaskComplete={moveTaskToDone} />
        <img src="https://cdn.pixabay.com/photo/2014/03/25/16/28/todo-list-297195_1280.png" alt="Homme regardant sa liste de choses à faire" />
        <AlreadyDone doneTasksProp={doneTasks} />

      </main>
      <Tools setNewToDo={setTasksToDoProp} currentToDoList={tasksToDoProp} />
    </>
  );
}

export default App;

