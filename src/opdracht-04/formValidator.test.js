import { isValidEmail, isValidPhone, isValidPostcode, validateForm } from './formValidator';

describe('Form Validator', () => {
  let testData;

  beforeEach(() => {
    testData = {
       email: 'test@example.com',
      phone: '0612345678',
       postcode: '1234 AB'
    };
    // TODO: Maak hier een testData object aan met geldige gegevens
    // testData = {
    //   email: 'test@example.com',
    //   phone: '0612345678',
    //   postcode: '1234 AB'
    // };
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: isValidEmail accepteert geldig email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail weigert email zonder @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
    // TODO: Test of 'testexample.com' false teruggeeft
    // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert 06 nummer', () => {
    expect(isValidPhone('0612345678')).toBe(true);
    // TODO: Test of '0612345678' geldig is
      // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPhone accepteert nummer met streepjes', () => {
   expect(isValidPhone('06-1234-5678')).toBe(true);
    // TODO: Test of '06-1234-5678' geldig is
    // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode met spatie', () => {
    expect(isValidPostcode('1234 AB')).toBe(true);
    // TODO: Test of '1234 AB' geldig is
  // Deze test faalt! Vervang met je eigen test
  });

  test('isValidPostcode accepteert postcode zonder spatie', () => {
    expect(isValidPostcode('1234AB')).toBe(true);
    // TODO: Test of '1234AB' geldig is
     // Deze test faalt! Vervang met je eigen test
  });

  test('validateForm geeft errors bij ongeldig formulier', () => {
    testData.email = 'ongeldig-email';

    const result = validateForm(testData);
    expect(result.errors.length).toBeGreaterThan(0);
    // TODO: Gebruik de testData uit beforeEach
    // TODO: Verander testData.email naar iets ongeldig
    // TODO: Check of errors array niet leeg is
    // Hint: Je moet eerst beforeEach invullen!
     // Deze test faalt! Vervang met je eigen test
  });

});
