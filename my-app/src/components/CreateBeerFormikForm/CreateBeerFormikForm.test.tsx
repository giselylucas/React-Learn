import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import CreateBeerFormikForm from './CreateBeerFormikForm';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import * as Yup from 'yup';
import { Formik, useFormikContext, Field } from 'formik';
/* Exercício 6 */
describe('CreateBeerFormikForm', () => {
    let utils: any;
    
    afterEach(cleanup);

    const mockFieldsChanged = {
        newBeerName: { 
            target: { 
                value: 'Beer 1'
            }
        },
        newBeerType: { 
            target: { 
                value: 'stout'
            }
        },
        newIngredients: { 
            target: { 
                value: 'Alcohol: 10%, Cevada: 100ml'
            }
        },
    };
    
    const setup = () => {
        utils = render(<CreateBeerFormikForm />);
        const inputBeerName = utils.getByLabelText(/Beer Name/i);
        const selectBeerType = utils.getByLabelText(/Beer Type/i);
        const checkboxHasCorn = utils.getByLabelText(/Has Corn/i);
        const inputIngredients = utils.getByLabelText(/Ingredients/i);
        const submitButton = utils.getByText(/Submit/i);

        return {
            beerName: inputBeerName,
            beerType: selectBeerType,
            hasCorn: checkboxHasCorn,
            ingredients: inputIngredients,
            submit: submitButton,
            ...utils
        }
    };

    it('render all elements', () => {
        const { beerName, beerType, hasCorn, ingredients } = setup();

        expect(beerName).toBeInTheDocument();
        expect(beerType).toBeInTheDocument();
        expect(hasCorn).toBeInTheDocument();
        expect(ingredients).toBeInTheDocument();
    });

    it('should render the form with default values', () => {
        const { beerName, beerType, hasCorn, ingredients } = setup();
        expect(beerName.value).toBe('');
        expect(beerType.value).toBe('');
        expect(hasCorn.value).toBe('false');
        expect(ingredients.value).toBe('');
    });

    it('should render the form when the input are changed', async () => {
        const { beerName, beerType, hasCorn, ingredients, submit } = setup();
        console.log = jest.fn();

        await wait(() => {
            fireEvent.change(beerName, mockFieldsChanged.newBeerName);
            fireEvent.change(beerType, mockFieldsChanged.newBeerType);
            fireEvent.click(hasCorn);
            fireEvent.change(ingredients, mockFieldsChanged.newIngredients);
            fireEvent.click(submit);
        });

        expect(beerName.value).toBe('Beer 1');
        expect(beerType.value).toBe('stout');
        expect(hasCorn.value).toBe('true');
        expect(ingredients.value).toBe('Alcohol: 10%, Cevada: 100ml');
    });

    it('should print the inputs with another values', async () => {
        const { beerName, beerType, ingredients, submit } = setup();

        console.log = jest.fn();

        await wait(() => {
            fireEvent.change(beerName, mockFieldsChanged.newBeerName);
            fireEvent.change(beerType, mockFieldsChanged.newBeerType);
            fireEvent.change(ingredients, mockFieldsChanged.newIngredients);
            fireEvent.click(submit);
        });
        
        expect(console.log).toBeCalledTimes(1);
    });

    it('should if button start disabled', () => {
        const { submit } = setup();

        expect(submit.disabled).toBeTruthy();
    });

    it('should validate if there is one field required empty the button continuous disabled', async () => {
        const { beerName, beerType, submit } = setup();

        await wait(() => {
            fireEvent.change(beerName, mockFieldsChanged.newBeerName);
            fireEvent.change(beerType, mockFieldsChanged.newBeerType);
            fireEvent.click(submit);
        });

        expect(submit.disabled).toBeTruthy();
    });

    /* Pending : Unit tests
    ** Validate if the message is showed
    ** Validate if the submit not complete when the users don't filled all required fields
    */

    it('', () => {
        //inputs.beerName.at(0).simulate('change', 'lalalalala');
        // expect(wrapper).toEqual('lalala');
        // expect(inputs.beerName).toEqual({});
        //expect(inputs.beerType).toBeValid();
        // expect(wrapper.find('#beerType1')).toBe('lalala');
        // expect(wrapper.find('#beerName1')).toBe('lalala');
    //     expect(validationSchema).toBe('jjsjsks');

    //     try {
    //         validationSchema.validateSync({
    //             hasCorn: false,
    //         });
    //         expect(validationSchema).toBe('allala');
    //         //fail();
    //     } catch (error) {
    //         //expect(error).toBeTruthy();
    //         expect(validationSchema).toBe('teste');
    //     }
    });
});
