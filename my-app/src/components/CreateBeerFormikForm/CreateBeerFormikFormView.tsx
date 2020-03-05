import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldProps, FormikProps } from 'formik';
import { Schema } from 'yup';
import Checkbox from './CheckboxFormikField';

interface Props<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
    validationSchema: Schema<T>;
}

function CreateBeerFormikFormView (props: Props<T>) {
    return (
        <Formik
                initialValues={props.initialValues}
                onSubmit={props.onSubmit}
                validationSchema={props.validationSchema}>
                {(props: FormikProps<any>) => (
                    <Form onSubmit={props.handleSubmit}>
                        <label htmlFor="beerName1">Beer Name</label>
                        <Field
                            className="newBeerName"
                            id="beerName1"
                            name="beerName"/>
                        <ErrorMessage name="beerName" >
                            {errorMessage => <p>{errorMessage}</p>}
                        </ErrorMessage>
                        <label htmlFor="beerType1">Beer Type</label>
                        <Field 
                            id="beerType1"
                            className="newBeerType"
                            component="select"
                            name="beerType" 
                            defaultValue="">
                            <option
                                value=""
                                hidden >
                                Select a option
                            </option>
                            <option value="ale">Ale</option>
                            <option value="lager">Lager</option>
                            <option value="stout">Stout</option>
                        </Field>
                        <ErrorMessage name="beerType" >
                            {errorMessage => <p>{errorMessage}</p>}
                        </ErrorMessage>
                        <Checkbox
                            className="newHasCorn"
                            name="hasCorn"
                            label="Has Corn"/>
                        <label htmlFor="ingredients1">Ingredients</label>
                        <Field
                            id="ingredients1"
                            className="newIngredients"
                            component="textarea"
                            name="ingredients" />
                        <ErrorMessage name="ingredients" >
                            {errorMessage => <p>{errorMessage}</p>}
                        </ErrorMessage>
                        <button
                            type="submit"
                            disabled={!(props.isValid && props.dirty)}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
    );
};

export default CreateBeerFormikFormView;