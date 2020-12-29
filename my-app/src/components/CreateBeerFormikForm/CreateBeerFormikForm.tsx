import React from 'react';
import { FormikValues } from 'formik';
import * as Yup from 'yup';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';


const validationSchema = Yup.object().shape({
    beerName: Yup.string()
    .required('Required'),
    beerType: Yup.string()
    .required('Required'),
    hasCorn: Yup.boolean(),
    ingredients: Yup.string()
    .required('Required')
});

function CreateBeerFormikForm () {
    const handleSubmit = (values: FormikValues) => {
        console.log(values);
    };
    
    const initialValues = {
        beerName: '',
        hasCorn: false,
        ingredients: ''
    };

    return (
        <CreateBeerFormikFormView 
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        />
    );
}

export default CreateBeerFormikForm;