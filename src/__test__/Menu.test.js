// src\__test__\Menu.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import Menu from '../components/body/Menu';

test('Menu Test', () => {
    render(<Menu />);
    const element = screen.getByText(/French Fries/i);
    expect(element).toBeInTheDocument();

    //  mock data nia kaj kora example lagbe
})

// Modal open ho;e sekhane data search
test('Menu Item click Modal show test', () => {
    render(<Menu />);
    const card = screen.getByText(/Ginger burger/i);
    fireEvent.click(card);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();


})