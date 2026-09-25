import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    // TODO: Render SearchBar
    // TODO: Vind de input (Hint: screen.getByPlaceholderText('Zoek...'))
    // TODO: Type tekst in input (Hint: fireEvent.change(input, { target: { value: 'React' } }))
    // TODO: Check of input.value 'React' is
     // Deze test faalt! Vervang met je eigen test
  });

  test('toont zoekterm onder de input', () => {
     render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(screen.getByText('Zoeken naar: Jest')).toBeInTheDocument();
    // TODO: Render SearchBar
    // TODO: Type 'Jest' in de input
    // TODO: Check of "Zoeken naar: Jest" op het scherm staat
    // Deze test faalt! Vervang met je eigen test
  });

  test('toont wissen button als er tekst is', () => {
     render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(screen.getByText('Wissen')).toBeInTheDocument();
    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Check of button met tekst "Wissen" verschijnt
    // Deze test faalt! Vervang met je eigen test
  });

  test('wissen button maakt input leeg', () => {
     render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    const button = screen.getByText('Wissen');
    fireEvent.click(button);
    expect(input.value).toBe('');

    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Klik op "Wissen" button
    // TODO: Check of input leeg is (value = '')
     // Deze test faalt! Vervang met je eigen test
  });

});
