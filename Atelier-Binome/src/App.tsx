import { useState } from 'react'
import './App.css'
import AlreadyDone from './components/AlreadyDone/AlreadyDone'
import Tools from './components/Tools/Tools'

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

function App() {

  return (
    <>
      <main>
        <AlreadyDone doneTasksProp={doneTasks} />
      </main>
      <Tools />
    </>
  )
}

export default App;
