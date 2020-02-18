import React, { useState } from 'react';
import dogCatImage from '../../img/dogs.jpg';

function DogDetails({handleClick}:any){
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1);
    }

    return (
        <div className="DogDetails">
            <p>Dog's name</p>
            <img src={dogCatImage} alt=''/>
            <button onClick={handleClick}>Bark!</button>
            <button onClick={counter}>Scold!</button>
            <p>Counter: {count}</p>
        </div>
    );
}

export default DogDetails;