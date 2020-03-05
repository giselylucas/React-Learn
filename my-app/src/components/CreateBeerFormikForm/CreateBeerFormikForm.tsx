import React from 'react';
import { Formik, Form, Field, FormikProps, FieldProps, FormikValues, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Checkbox from './CheckboxFormikField';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';


function CreateBeerFormikForm () {
    const handleSubmit = (values: FormikValues) => {
        console.log(values);
    };
    
    const initialValues = {
        beerName: '',
        hasCorn: false,
        ingredients: ''
    };

    const validationSchema = Yup.object().shape({
        beerName: Yup.string()
            .required('Required'),
        beerType: Yup.string()
            .required('Required'),
        ingredients: Yup.string()
            .required('Required')
    });

    return (
            <CreateBeerFormikFormView 
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={initialValues}
            />
    );
}



export default CreateBeerFormikForm;