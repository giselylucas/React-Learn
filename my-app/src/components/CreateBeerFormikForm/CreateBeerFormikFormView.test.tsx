import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CheckboxFormikField from '../CheckboxFormikField/CheckboxFormikField';

describe('CreateBeerFormikFormView', () => {
    const props = {
        initialValues: {},
        validationSchema: Yup.object().shape({}),
        onSubmit: jest.fn()
    };

    const formikProps = {
        handleSubmit: jest.fn(),
        isValid: false,
        isDirty: true
    };

    const errorMessage = (errorId: String) => {
        return <ErrorMessage name={errorId}></ErrorMessage>;
    };

    const wrapper = shallow(<CreateBeerFormikFormView 
                                initialValues={props.initialValues}
                                validationSchema={props.validationSchema}
                                onSubmit={props.onSubmit}
                            />);

    describe('Render the component main structure', () => {
        it('should to render this component', () => {        
            expect(wrapper).toHaveLength(1);
    
            const formikWrapper = wrapper.find(Formik);
    
            expect(formikWrapper).toHaveLength(1);
            expect(formikWrapper.prop('initialValues')).toBe(props.initialValues);
            expect(formikWrapper.prop('onSubmit')).toBe(props.onSubmit);
            expect(formikWrapper.prop('validationSchema')).toBe(props.validationSchema);
    
        });
    
        it('should to render correctly children', () => {
            const formikWrapper = wrapper
                                    .find(Formik)
                                    .renderProp('children')(formikProps);
    
            expect(formikWrapper.find(Form)).toHaveLength(1);
            expect(formikWrapper.children()).toHaveLength(11);
        });
        
    });

    describe('Render correctly order of elements', () => {
        // it('should to render correctly first field - label and input', () => {
        //     const formikWrapper = wrapper
        //                             .find(Formik)
        //                             .renderProp('children')(formikProps);
    
        //     expect(formikWrapper.childAt(0).getElement().type).toBe('label');
        //     expect(formikWrapper.childAt(0).prop('htmlFor')).toBe('beerName1');
        //     expect(formikWrapper.childAt(0).text()).toBe('Beer Name');

        //     expect(formikWrapper.childAt(1).find(Field)).toHaveLength(1);
        //     expect(formikWrapper.childAt(1).prop('className')).toBe('newBeerName');
        //     expect(formikWrapper.childAt(1).prop('name')).toBe('beerName');
            
        //     expect(formikWrapper.childAt(2).find(ErrorMessage)).toHaveLength(1);
        //     expect(formikWrapper.childAt(2).prop('name')).toBe('beerName');
        // });

        it('should to render correctly first field - label and input (Match Elements)', () => {
            const formikWrapper = wrapper
                                    .find(Formik)
                                    .renderProp('children')(formikProps);

            const beerName = {
                id: 'beerName1',
                label: 'Beer Name',
                className: 'newBeerName',
                name: 'beerName'
            };
            
            const beerNameLabelElementMock = <label htmlFor={beerName.id}>{beerName.label}</label>;
            const beerNameInputElementMock = <Field className={beerName.className} name={beerName.name}/>;

            console.log(formikWrapper.childAt(1).debug());
            
            expect(formikWrapper.childAt(0).matchesElement(beerNameLabelElementMock)).toBeTruthy();
            expect(formikWrapper.childAt(1).find(Field)).toHaveLength(1);
            expect(formikWrapper.childAt(1).matchesElement(beerNameInputElementMock)).toBeTruthy();

            /*
                Problemas: Não consegui de forma fácil simular o ErrorMessage utilizando matchElements.
            */
            //console.log(errorMessage(beerName.name));
            //console.log(formikWrapper.childAt(2).find(ErrorMessage).debug());
            expect(formikWrapper.childAt(2).find(ErrorMessage)).toHaveLength(1);
            //expect(formikWrapper.childAt(2).matchesElement(errorMessage(beerName.name))).toBeTruthy();
        });

        // it('', () => {
        //     const formikWrapper = wrapper
        //                             .find(Formik)
        //                             .renderProp('children')(formikProps);
            
        //     const optionsChildren = formikWrapper.childAt(4).find(Field).children();

            
        //     const beerTypeOptions = ['ale', 'lager', 'stout'];
        //     const optionsElementMock: Array<T> = [];
        //     const children = formikWrapper.childAt(4).find(Field).children();
            
        //     beerTypeOptions.forEach((option, index) => {
        //         console.log(index);
        //         optionsElementMock.push(<option value={option} hidden={true}>{option}</option>);
        //     });
        //     expect(children).toMatchSnapshot();
        // });

        // /* Problemas para utilizar o matchesElements em Elementos com filhos.
        // */
        // // it('should to render correctly second field - label, input and error message', () => {
        // //     const formikWrapper = wrapper
        // //                             .find(Formik)
        // //                             .renderProp('children')(formikProps);

        // //     const beerType = {
        // //         id: 'beerType1',
        // //         label: 'Beer Type',
        // //         className: 'newBeerType',
        // //         component: 'select',
        // //         default: '',
        // //         name: 'beerType'
        // //     };

        // //     const beerTypeOptions = ['ale', 'lager', 'stout'];
        // //     const optionsElementMock: Array<T> = [];
        // //     const children = formikWrapper.childAt(4).find(Field).children();

        // //     beerTypeOptions.forEach((option, index) => {
        // //         console.log(index);
        // //         optionsElementMock.push(<option value={option} hidden={true}>{option}</option>);
        // //     });

        // //     console.log(children.debug());
        // //     expect(children).toMatchInlineSnapshot(optionsElementMock);

        // //     const beerTypeLabelElementMock = <label htmlFor={beerType.id}>{beerType.label}</label>;
        // //     const beerTypeInputElementMock = <Field 
        // //                                             id={beerType.id}
        // //                                             className={beerType.className}
        // //                                             name={beerType.name}
        // //                                             component={beerType.component}
        // //                                             defaultValue={beerType.default} >lalala</Field>;
    
        // //     expect(formikWrapper.childAt(3).matchesElement(beerTypeLabelElementMock)).toBeTruthy();
        // //     console.log(formikWrapper.childAt(4).find(Field).getElement());
        // //     console.log(beerTypeInputElementMock);
        // //     expect(formikWrapper.childAt(4).find(Field).getElement()).toBe(beerTypeInputElementMock);
            
        // // });

        // it('should to render correctly third field - checkbox', () => {
        //     const formikWrapper = wrapper
        //                             .find(Formik)
        //                             .renderProp('children')(formikProps);

        //     const checkboxElementMock = <CheckboxFormikField
        //                                     className='newHasCorn'
        //                                     name='hasCorn'
        //                                     label='Has Corn' />;

        //     expect(formikWrapper.childAt(6).find(CheckboxFormikField)).toHaveLength(1);
        //     expect(formikWrapper.childAt(6).find(CheckboxFormikField).matchesElement(checkboxElementMock)).toBeTruthy();
        // });

        // it('should to render correctly fourth field - label, input and error message', () => {
        //     const formikWrapper = wrapper
        //                             .find(Formik)
        //                             .renderProp('children')(formikProps);
    
        //     expect(formikWrapper.childAt(7).getElement().type).toBe('label');
        //     expect(formikWrapper.childAt(7).prop('htmlFor')).toBe('ingredients1');
        //     expect(formikWrapper.childAt(7).text()).toBe('Ingredients');

        //     expect(formikWrapper.childAt(8).find(Field)).toHaveLength(1);
        //     expect(formikWrapper.childAt(8).prop('id')).toBe('ingredients1');
        //     expect(formikWrapper.childAt(8).prop('className')).toBe('newIngredients');
        //     expect(formikWrapper.childAt(8).prop('component')).toBe('textarea');
        //     expect(formikWrapper.childAt(8).prop('name')).toBe('ingredients');

        //     expect(formikWrapper.childAt(9).find(ErrorMessage)).toHaveLength(1);
        //     expect(formikWrapper.childAt(9).prop('name')).toBe('ingredients');
        // });


    });

    // it('', () => {});
});