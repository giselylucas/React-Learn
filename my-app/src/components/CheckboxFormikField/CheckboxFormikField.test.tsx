import React from 'react';
import { Field, Formik } from 'formik';
import { shallow, mount } from 'enzyme';

import CheckboxFormikField from './CheckboxFormikField';

describe('CheckboxFormikField', () => {
    const fieldProps = {
        field: {
            name: 'hasCorn',
            value: false,
            onChange: jest.fn(),
            onBlur: jest.fn()
        }
    };

    const fieldPropsMock = {
        name: 'hasCorn',
        className: 'newHasCorn'
    };

    const wrapper = shallow(<CheckboxFormikField 
        className="newHasCorn"
        name="hasCorn"
        label="Has Corn"/>);
    
        
    it('should render a Checkbox field', () => {
        const fieldFormik = wrapper.find(Field);
        expect(fieldFormik).toHaveLength(1);

        const propsFormik = fieldFormik.props();
        expect(propsFormik).toMatchObject(fieldPropsMock);
        expect(fieldFormik.prop('name')).toBe(fieldPropsMock.name);
        expect(fieldFormik.prop('className')).toBe(fieldPropsMock.className);
    });

    it('should render a children fields of checkbox element ', () => {
        const fieldWrapper = wrapper.find(Field).renderProp('children')(fieldProps);
        const fieldChildrenWrapper = fieldWrapper.children();
        expect(fieldChildrenWrapper).toHaveLength(2);
        expect(fieldChildrenWrapper.find('label')).toHaveLength(1);
        expect(fieldChildrenWrapper.find('input')).toHaveLength(1);
    });

    it('should to verify the elements orders is correct', () => {
        const elementMock = <div><label htmlFor="hasCorn1">Has Corn</label><input id="hasCorn1"/></div>;

        const fieldWrapper = wrapper.find(Field).renderProp('children')(fieldProps);
        const inputWrapper = fieldWrapper.children().find('input');
        const labelWrapper = fieldWrapper.children().find('label');
        
        expect(fieldWrapper.childAt(0)).toEqual(labelWrapper);
        expect(fieldWrapper.childAt(1)).toEqual(inputWrapper);

        expect(fieldWrapper.matchesElement(elementMock)).toBeTruthy();
    });

    it('should render correct props to label field', () => {
        const fieldWrapper = wrapper.find(Field).renderProp('children')(fieldProps);
        const labelWrapper = fieldWrapper.children().find('label');

        expect(labelWrapper.text()).toEqual('Has Corn');
        expect(labelWrapper.prop('htmlFor')).toEqual('hasCorn1');
        expect(labelWrapper.prop('children')).toEqual('Has Corn');
    });

    it('should render correct props to input field', () => {
        const fieldWrapper = wrapper.find(Field).renderProp('children')(fieldProps);
        const inputWrapper = fieldWrapper.children().find('input');
        
        expect(inputWrapper.prop('id')).toEqual('hasCorn1');
        expect(inputWrapper.prop('type')).toEqual('checkbox');
        expect(inputWrapper.prop('name')).toEqual('hasCorn');
        expect(inputWrapper.prop('value')).toBeFalsy();
    });
});