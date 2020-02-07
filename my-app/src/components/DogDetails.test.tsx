import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import DogDetails from './DogDetails';

describe('DogDetails', () => {
    it('should to load paragraph', () => {
        const { getByText } = render(<DogDetails />);
        const paragraphElement = getByText("Dog's name");

        expect(paragraphElement).toBeInTheDocument();
    });

    //Existe uma outra forma de validar o valor da imagem
    it('should has image with src valid', () => {
        render(<DogDetails />);
        
        const imageElement = document.querySelector('img');

        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src');
        expect(imageElement?.getAttribute('src')).toBe('dogs.jpg');
        expect(imageElement).toHaveAttribute('alt');
    });

    it('should has a button', () => {
        const { getByText } = render(<DogDetails />);
        const button = getByText('Bark!');

        expect(button).toBeInTheDocument();
    });

    //Existe uma outra forma de validar se o valor está correto?
    it('should render alert when button was clicked', () => {
        const { getByText } = render(<DogDetails />);
        const button = getByText('Bark!');
        window.alert = jest.fn();

        fireEvent.click(button);

        // expect(button).toHaveAttribute('onClick');
        expect(window.alert).toHaveBeenCalled();
    })
})