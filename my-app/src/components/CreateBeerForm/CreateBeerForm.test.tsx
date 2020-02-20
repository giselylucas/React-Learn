import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CreateBeerForm from './CreateBeerForm';

/* Exercício 5 */
describe('CreateBeerForm', () => {
    afterEach(cleanup);

    const setup = () => {
        const utils = render(<CreateBeerForm />);
        const inputBeerName = utils.getByLabelText(/Beer Name/i);
        const inputBeerType = utils.getByLabelText(/Beer Option/i);
        const inputHasCorn = utils.getByLabelText(/Has Corn/i);
        const inputIngredients = utils.getByLabelText(/Ingredients/i);
        const submit = utils.getByText(/Submit/i);

        return {
            inputBeerName,
            inputBeerType,
            inputHasCorn,
            inputIngredients,
            submit,
            ...utils,
        }
    };
    it('should render the form', () => {
        const { inputBeerName, inputBeerType, inputHasCorn, inputIngredients } = setup();

        expect(inputBeerName).toBeInTheDocument();
        expect(inputBeerType).toBeInTheDocument();
        expect(inputHasCorn).toBeInTheDocument();
        expect(inputIngredients).toBeInTheDocument();
    });

    it('should render the form with default value', () => {
        const { inputBeerName, inputBeerType, inputHasCorn, inputIngredients } = setup();

        expect(inputBeerName.value).toBe("");
        expect(inputBeerType.value).toBe("ale");
        expect(inputHasCorn.value).toBe("false");
        expect(inputIngredients.value).toBe("");
    });

    it('should change the value when the new value is attribute for beer name', () => {
        const { inputBeerName, inputBeerType, inputHasCorn, inputIngredients } = setup();
        const ingredients = "Alcohol: 10%, Cevada: 100ml";

        fireEvent.change(inputBeerName, {target: {value: 'Text Beer'}});
        expect(inputBeerName.value).toBe("Text Beer");
        fireEvent.change(inputBeerType, {target: {value: "stout"}});
        expect(inputBeerType.value).toBe("stout");
        fireEvent.click(inputHasCorn);
        expect(inputHasCorn.value).toBe("true");
        fireEvent.change(inputIngredients, {target: {value: ingredients}})
        expect(inputIngredients.value).toBe("Alcohol: 10%, Cevada: 100ml");
    });

    it('should print the values when the submit button is clicked', () => {
        const { submit, inputBeerName, inputBeerType, inputHasCorn, inputIngredients } = setup();
        const ingredients = "Alcohol: 10%, Cevada: 100ml";

        console.log = jest.fn();

        fireEvent.change(inputBeerName, {target: {value: 'Text Beer'}});
        fireEvent.change(inputBeerType, {target: {value: "stout"}});
        fireEvent.click(inputHasCorn);
        fireEvent.change(inputIngredients, {target: {value: ingredients}})
        fireEvent.click(submit);

        expect(console.log).toBeCalled();
        expect(console.log).toBeCalledTimes(1);
    });
});