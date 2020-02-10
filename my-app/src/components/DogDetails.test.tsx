import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import DogDetails from './DogDetails';

describe('DogDetails', () => {
    /* Exercício 2 */
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

    /* Exercício 3 */
    //Existe uma outra forma de validar se o valor está correto?
    it('should called the function when button was clicked', () => {
        const onBark = jest.fn();
        const { getByText } = render(<DogDetails handleClick={onBark}/>);
        const button = getByText('Bark!');

        fireEvent.click(button);

        // expect(button).toHaveAttribute('onClick');
        expect(onBark).toHaveBeenCalled();
    })
})