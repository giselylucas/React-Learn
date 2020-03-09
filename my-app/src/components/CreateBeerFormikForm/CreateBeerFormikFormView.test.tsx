import React from 'react';
import { shallow } from 'enzyme';

import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

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

    const wrapper = shallow(<CreateBeerFormikFormView 
                                initialValues={props.initialValues}
                                validationSchema={props.validationSchema}
                                onSubmit={props.onSubmit}
                            />);

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

    describe('Render correctly order of elements', () => {
        it('should to render correctly first element', () => {
            const formikWrapper = wrapper
                                    .find(Formik)
                                    .renderProp('children')(formikProps);
    
            console.log(formikWrapper.childAt(0).props());
            expect(formikWrapper.childAt(0).getElement().type).toBe('label');
            expect(formikWrapper.childAt(0).prop('htmlFor')).toBe('beerName1');
            expect(formikWrapper.childAt(0).text()).toBe('Beer Name');

        });
    });


    it('should to render correctly orders of elements', () => {
        const wrapper = shallow(<CreateBeerFormikFormView 
                                    initialValues={props.initialValues}
                                    validationSchema={props.validationSchema}
                                    onSubmit={props.onSubmit}
                                />);

        console.log('la') ;
    });

    it('', () => {});
});