import './App.css';
import AlreadyDone from './components/AlreadyDone/AlreadyDone';
import Tools from './components/Tools/Tools';
import Header from "./components/Header/Header";
import ToDoCard from "./components/ToDoCard/ToDoCard";
import { useState } from 'react';


function App() {
  const [tasksToDo, setTasksToDo] = useState<{
    priority: string;
    task: string;
    priorityLevel: string;
  }[]>([

    {
      priority: "Urgent",
      task: "Rendre le dossier Marconi",
      priorityLevel: "high-priority"
    },
    {
      priority: "Faire dans la journée",
      task: "Prendre RDV contrôle technique",
      priorityLevel: "medium-priority"
    },
    {
      priority: "Peut attendre",
      task: "Prendre RDV chez le Dentiste",
      priorityLevel: "low-priority"
    }
  ]);

  const [doneTasks, setDoneTasks] = useState<{
    priority: string;
    task: string;
    priorityLevel: string;
  }[]>([]);;

  // Fonction pour déplacer une tâche de "À faire" vers "Déjà fait"
  const moveTaskToDone = (index: number) => {
    const taskToMove = tasksToDo[index]; //Récupère la tâche à déplacer
    setDoneTasks([...doneTasks, taskToMove]); // Ajoute la tâche aux tâches terminées
    setTasksToDo(tasksToDo.filter((_, i) => i !== index)); // Retire la tâche des tâches "à faire"
  };

  return (
    <>
      <Header />
      <main>
        <ToDoCard toDoCardProps={tasksToDo} onTaskComplete={moveTaskToDone} />
        <AlreadyDone doneTasksProp={doneTasks} />
      </main>
      <Tools />
    </>
  );
}

export default App;

