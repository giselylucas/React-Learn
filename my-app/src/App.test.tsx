import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  /* Exercício 1 */
  it('should render learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('should render button with alert', () => {
    const { getByText } = render(<App />);
    window.alert = jest.fn();
  
    fireEvent.click(getByText('Button 1'));
  
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
  /* Exercício 2 */
  it('should render DogDetails component there is on page', () => {
    const { getByText } = render(<App />);
    const paragraphDogDetails = getByText("Dog's name");
    const imageElement = document.querySelector('img');
    const button = getByText('Bark!');
  
    expect(paragraphDogDetails).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  
    /* Exercício 3 */
    //Existe uma outra forma de validar se o valor está correto?
    it('should render alert when button was clicked', () => {
      const { getByText } = render(<App />);
      const button = getByText('Bark!');
      window.alert = jest.fn();

      fireEvent.click(button);

      // expect(button).toHaveAttribute('onClick');
      expect(window.alert).toHaveBeenCalled();
    });
});