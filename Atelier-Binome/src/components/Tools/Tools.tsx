import './Tools.css'

function Tools() {

  return (
    <section className="tools">
      <h3>Nouvelle tâche</h3>
      <form action=""  onSubmit={(e) => e.preventDefault()}>
        <select name="priority" id="priority-selector" required>
          <option value="">-- Choisissez une priorité --</option>
          <option value="urgent">Urgent</option>
          <option value="to do during current day">Faire dans la journée</option>
          <option value="can wait">Peut attendre</option>
        </select>
        <textarea name="task" id="task-input" rows={3} maxLength={100} placeholder="Ce dont vous devez vous souvenir" required></textarea>
        <button type="submit">Créer</button>
      </form>
    </section>
  )
}

export default Tools;