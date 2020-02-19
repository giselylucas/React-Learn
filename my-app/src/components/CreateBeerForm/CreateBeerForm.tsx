import React, { useState } from 'react';

function CreateBeerForm() {
    const [beerName, setBeerName] = useState('');
    const [beerType, setBeerType] = useState('ale');
    const [hasCorn, setHasCorn] = useState('false');
    const [ingredients, setIngredients] = useState('');

    const writeFormValues = () => {
        console.log(`Data Form:
        Beer Name: ${beerName}
        Beer Type: ${beerType}
        Has Corn: ${hasCorn}
        Ingredients: ${ingredients}
        `)
    }

    const isChecked = (isHasCorn: boolean) => {
        setHasCorn(`${isHasCorn}`);
    }

    return (
        <div className="form">
            <p>Beer Name:
                <input
                    type="text"
                    id="beerName"
                    aria-label="beer-name"
                    name="beerName"
                    value={beerName}
                    onChange={event => {setBeerName(event.target.value) }}/>
            </p>
            <p>Beer Type:
                <select
                    id="beerType"
                    name="beerType"
                    aria-label="beer-option"
                    value={beerType}
                    onChange={event => setBeerType(event.target.value) }>
                    <option value="ale">Ale</option>
                    <option value="lager">Lager</option>
                    <option value="stout">Stout</option>
                </select>
            </p>
            <p>Has corn
                <input
                    type="checkbox"
                    name="hasCorn"
                    aria-label="has-corn"
                    id="hasCorn"
                    value={hasCorn}
                    onChange={event => isChecked(event.target.checked)} />
            </p>
            <p>Ingredients
                <textarea
                    rows={4}
                    cols={50}
                    id="ingredients"
                    name="ingredients"
                    aria-label="ingredients"
                    value={ingredients}
                    onChange={event => setIngredients(event.target.value)} />
            </p>
            <p>
                <button
                    type="submit"
                    id="submit"
                    name="submit"
                    aria-label="submit"
                    onClick={writeFormValues}>
                    Submit
                </button> 
            </p>
        </div>
    )
}

export default CreateBeerForm;