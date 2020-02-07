import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render button with alert', () => {
  const { getByText } = render(<App />);
  window.alert = jest.fn();

  fireEvent.click(getByText('Button 1'));

  expect(window.alert).toHaveBeenCalledTimes(1);
});

test('if the DogDetails component there is on page', () => {
  const { getByText } = render(<App />);
  const paragraphDogDetails = getByText("Dog's name");
  const imageElement = document.querySelector('img');
  const button = getByText('Bark!');

  expect(paragraphDogDetails).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
