import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    const result = validatePassword('Test1');
    expect(result.isValid).toBe(false);
    // TODO: Test of 'Test1' invalid is
    // Hint: check of isValid false is
    // Deze test faalt! Vervang met je eigen test
  });

  test('wachtwoord zonder nummer geeft error', () => {
    // TODO: Test of 'Welkomtestje' invalid is
    const result = validatePassword('Welkomtestje');
    expect(result.isValid).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    const result = validatePassword('welkom123');
    expect(result.isValid).toBe(false);
    // TODO: Test of 'welkom123' invalid is
     // Deze test faalt! Vervang met je eigen test
  });

  test('errors array bevat juiste foutmeldingen', () => {
    const result = validatePassword('test');
    expect(result.errors).toContain("Minimaal 8 karakters");
    expect(result.errors).toContain("Moet minimaal 1 nummer bevatten");
    expect(result.errors).toContain("Moet minimaal 1 hoofdletter bevatten");

    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
     // Deze test faalt! Vervang met je eigen test
  });

});
