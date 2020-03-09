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
        {({field}: FieldProps) => (
            <div>
                <label htmlFor="hasCorn1">
                    {props.label}
                </label>
                <input
                    id="hasCorn1"
                    type="checkbox"
                    {...field}
                />
            </div>
        )}
        </Field>
    );
}

export default CheckboxFormikField;