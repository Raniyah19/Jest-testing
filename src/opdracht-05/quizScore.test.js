import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {

    // TODO: Maak hier een array met quiz antwoorden
quizAnswers = [
{ question: 1, isCorrect: true, points: 10 },
{ question: 2, isCorrect: true, points: 10 },
{ question: 3, isCorrect: false, points: 0 },
{ question: 4, isCorrect: true, points: 10 },
{ question: 5, isCorrect: true, points: 10 }
];
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    expect(calculatePercentage(quizAnswers)).toBe(80);
    // TODO: Gebruik quizAnswers uit beforeEach
    // TODO: Met 4 van 5 goed moet het 80% zijn
    // Hint: Je moet eerst beforeEach invullen!
    // Deze test faalt! Vervang met je eigen test
  });

  test('isPassed geeft true bij 60% of hoger', () => {
        expect(isPassed(quizAnswers)).toBe(true);

    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of isPassed true teruggeeft
    // Deze test faalt! Vervang met je eigen test
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    const answers = [
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 }
    ];

    expect(isPassed(answers)).toBe(false);
    // TODO: Maak nieuwe answers array met 50% goed
    // TODO: Check of isPassed false teruggeeft
     // Deze test faalt! Vervang met je eigen test
  });

  test('getGrade geeft Excellent bij 90%+', () => {
     const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 },
      { question: 6, isCorrect: true, points: 10 },
      { question: 7, isCorrect: true, points: 10 },
      { question: 8, isCorrect: true, points: 10 },
      { question: 9, isCorrect: true, points: 10 },
      { question: 10, isCorrect: false, points: 0 }
    ];
    
    expect(getGrade(answers)).toBe('Excellent');
    // TODO: Maak answers met 90% of meer goed
    // TODO: Check of getGrade 'Excellent' teruggeeft
     // Deze test faalt! Vervang met je eigen test
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    expect(getGrade(quizAnswers)).toBe('Goed');
    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of getGrade 'Goed' teruggeeft
     // Deze test faalt! Vervang met je eigen test
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    expect(countWrongAnswers(quizAnswers)).toBe(1);
    // TODO: Gebruik quizAnswers (1 fout antwoord)
    // TODO: Check of countWrongAnswers 1 teruggeeft
    // Deze test faalt! Vervang met je eigen test
  });

});
