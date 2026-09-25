import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const result = screen.getByText('Jan');
    expect(result).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30}/>);
    expect(screen.getByText('Leeftijd: 30')).toBeInTheDocument();
    // TODO: Render ProfileCard met name="Piet" en age={30}
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    // Hint: gebruik screen.getByText()
    // Deze test faalt! Vervang met je eigen test
  });

  test('toont bio als die er is', () => {
   render(<ProfileCard name="Piet" age={30} bio="Ik hou van programmeren"/>);
   expect(screen.getByText('Ik hou van programmeren')).toBeInTheDocument();
    // TODO: Render ProfileCard met bio="Ik hou van programmeren"
    // TODO: Check of die tekst op het scherm staat
// Deze test faalt! Vervang met je eigen test
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Piet" age={30}/>);
    expect(screen.getByText('Geen bio beschikbaar')).toBeInTheDocument();
    // TODO: Render ProfileCard ZONDER bio prop
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
   // Deze test faalt! Vervang met je eigen test
  });

});
