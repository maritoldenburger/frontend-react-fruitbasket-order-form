import React, {useState} from 'react';

function FruitCounter({fruitName, fruit, setFruit}) {

    return (
        <article>
            <h2>{fruitName}</h2>
            <button type="button" className="fruit-button"
                    disabled={fruit === 0}
                    onClick={() => setFruit(fruit - 1)}>-
            </button>
            <p>{fruit}</p>
            <button type="button" className="fruit-button"
                    onClick={() => setFruit(fruit + 1)}>+
            </button>
        </article>
    )
}

export default FruitCounter;