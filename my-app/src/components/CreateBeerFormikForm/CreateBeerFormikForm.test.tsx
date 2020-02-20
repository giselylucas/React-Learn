import React from 'react';
import Formik from 'formik';
import { render, fireEvent, cleanup } from '@testing-library/react'
import CreateBeerFormikForm from './CreateBeerFormikForm';

describe('CreateBeerFormikForm', () => {
    it('', () => {
        const { getByText } = render(<CreateBeerFormikForm />);
        expect(getByText("Render")).toBeInTheDocument();
    });
});
