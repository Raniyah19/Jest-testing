/**
 * TDD Opdracht: Workout Duration Calculator
 * 
 * Bereken statistieken over workouts
 * Run: npm test opdracht-10
 */

/**
 * Telt totaal aantal reps op
 */
export function calculateTotalReps(workouts) {
  return workouts.reduce((total, workout) => total + workout.reps, 0);
}

/**
 * Telt totale load/gewicht op
 */
export function calculateTotalLoad(workouts) {
  return workouts.reduce((total, workout) => total + workout.load, 0);
}

/**
 * Schat duur van workout in minuten
 * Aanname: 3 seconden per rep
 */
export function estimateDuration(workouts) {
  const totalReps = calculateTotalReps(workouts);
  const seconds = totalReps * 3;
  const minutes = seconds / 60;

  return Math.round(minutes * 100) / 100;
}

/**
 * Berekent totaal volume (reps × load)
 * Volume = maat voor trainingsintensiteit
 */
export function getTotalVolume(workouts) {
  return workouts.reduce(
    (total, workout) => total + workout.reps * workout.load,
    0
  );
}