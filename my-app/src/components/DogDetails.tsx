import React, { useState } from 'react';
import dogCatImage from '../img/dogs.jpg';

function DogDetails({onBark}:any){

    return (
        <div className="DogDetails">
            <p>Dog's name</p>
            <img src={dogCatImage} alt=''/>
            <button onClick={onBark}>Bark!</button>
        </div>
    );
}

export default DogDetails;