import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props{
    name: string;
    label: string;
    className: string;
}

function CheckboxFormikField(props: Props) {
    return (
        <Field
            name={props.name}
            className={props.className}>
        {({field, form}: FieldProps) => (
            <label>
            <input
                type="checkbox"
                {...field}
            />
            {props.label}
            </label>
        )}
        </Field>
    );
}

export default CheckboxFormikField;