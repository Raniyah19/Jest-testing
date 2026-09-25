import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const result = isValidTodo('Boodschappen doen');
    expect(result).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
     const result = isValidTodo("");
    expect(result).toBe(false);
    // TODO: Test of '' invalid is
    // Deze test faalt! Vervang deze regel met je eigen test
  });
3
  test('getTodoPriority geeft high voor urgent', () => {
     const result = getTodoPriority("urgent bellen");
    expect(result).toBe("high");
    // TODO: Test of 'urgent bellen' priority 'high' krijgt
   // Deze test faalt! Vervang deze regel met je eigen test
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    const result = getTodoPriority("koffie drinken");
    expect(result).toBe("low");
    // TODO: Test of 'koffie drinken' priority 'low' krijgt
    // Deze test faalt! Vervang deze regel met je eigen test
  });

});



