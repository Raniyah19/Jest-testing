/**
 * TDD Opdracht: Calculator
 *
 * Jouw taak: schrijf de functies zodat alle tests slagen!
 * Run: npm test opdracht-09
 *
 * De tests zijn al geschreven. Jij moet de code maken.
 */

export function add(a, b) {
  return a + b;
  // TODO: Implementeer deze functie
}

export function subtract(a, b) {
  return a - b;
  // TODO: Implementeer deze functie
}

export function multiply(a, b) {
  return a * b;
  // TODO: Implementeer deze functie
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
  // TODO: Implementeer deze functie
  // Let op: gooi een error bij delen door 0!
}

export function power(base, exponent) {
  return base ** exponent;
  // TODO: Implementeer deze functie
  // Tip: gebruik Math.pow() of ** operator
}
