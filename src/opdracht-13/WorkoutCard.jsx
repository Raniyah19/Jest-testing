/**
 * TDD Opdracht: WorkoutCard Component
 * 
 * Een card die 1 workout toont met delete functionaliteit
 * Run: npm test opdracht-13
 */

function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="workout-card">
      <h2>{workout.title}</h2>
      <p>{workout.reps} reps</p>
      <p>{workout.load} kg</p>
      <button onClick={() => onDelete?.(workout._id)}>
        Delete
      </button>
    </div>
  );
}

export default WorkoutCard;
  // TODO: Render een workout card die toont:
  // - workout.title (in een heading of div)
  // - workout.reps met "reps" label
  // - workout.load met "kg" label  
  // - Delete button die onDelete(workout._id) aanroept
  
  // Geef de container div een className="workout-card"
  
  // TODO: Vervang met je component



