/**
 * TDD Opdracht: Weekly Workout Schedule
 * 
 * Plan workouts voor de hele week
 * Run: npm test opdracht-12
 */

/**
 * Maakt een leeg week schema aan
 * Return: { monday: [], tuesday: [], ..., sunday: [] }
 */
export function createWeekSchedule() {
  return {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };
}

/**
 * Voegt workout toe aan specifieke dag
 */
export function addWorkoutToDay(schedule, day, workout) {
  schedule[day].push(workout);
}

/**
 * Geeft alle workouts voor een specifieke dag
 */
export function getWorkoutsForDay(schedule, day) {
  return schedule[day];
}

/**
 * Telt totaal aantal reps voor hele week
 */
export function getTotalRepsForWeek(schedule) {
  return Object.values(schedule)
    .flat()
    .reduce((total, workout) => total + workout.reps, 0);
}

/**
 * Check of er minimaal 1 rustdag is (dag zonder workouts)
 */
export function hasRestDay(schedule) {
  return Object.values(schedule).some(
    workouts => workouts.length === 0
  );
}