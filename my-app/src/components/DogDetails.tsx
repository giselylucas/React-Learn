import React, { useState } from 'react';
import dogCatImage from '../img/dogs.jpg';

function DogDetails({handleClick}:any){

    return (
        <div className="DogDetails">
            <p>Dog's name</p>
            <img src={dogCatImage} alt=''/>
            <button onClick={handleClick}>Bark!</button>
            {/* <button onClick={}>Scold!</button> */}
        </div>
    );
}

export default DogDetails;