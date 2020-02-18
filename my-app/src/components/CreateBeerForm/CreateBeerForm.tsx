import React, { useState } from 'react';

function CreateBeerForm() {
    const [beerName, setBeerName] = useState('');
    const [beerOptions, setBeerOptions] = useState('ale');
    const [hasCorn, setHasCorn] = useState('false');
    const [ingredients, setIngredients] = useState('');

    const writeFormValues = () => {
        console.log(`Data Form:
        Beer Name: ${beerName}
        Option: ${beerOptions}
        Has Corn: ${hasCorn}
        Ingredients: ${ingredients}
        `)
    }

    const isChecked = (isHasCorn: boolean) => {
        setHasCorn(`${isHasCorn}`);
    }

    return (
        <div>
            <p>
                <label>Beer Name: 
                    <input
                        type="text"
                        id="beerName"
                        name="beerName"
                        value={beerName}
                        onChange={event => {setBeerName(event.target.value) }}/>
                </label>
            </p>
            <p>
                <label>Beer Type: 
                    <select
                        id="beerType"
                        name="beerType"
                        value={beerOptions}
                        onChange={event => setBeerOptions(event.target.value) }>
                        <option value="ale">Ale</option>
                        <option value="lager">Lager</option>
                        <option value="stout">Stout</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <input
                        type="checkbox"
                        name="hasCorn"
                        id="hasCorn"
                        value={hasCorn}
                        onChange={event => isChecked(event.target.checked)} />
                    Has corn
                </label>
            </p>
            <p>
                <label>Ingredients
                    <textarea
                        rows={4}
                        cols={50}
                        id="ingredients"
                        name="ingredients"
                        value={ingredients}
                        onChange={event => setIngredients(event.target.value)} />
                </label>
            </p>
            <p>
                <button type="submit" id="submit" name="submit" onClick={writeFormValues}>
                    Submit    
                </button> 
            </p>
        </div>
    )
}

export default CreateBeerForm;