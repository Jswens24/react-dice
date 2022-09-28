import React, { Fragment, useState } from 'react';
import Die from './Die';


const RollDice = () => {
    const [dieOne, setDieOne] = useState(1);
    const [dieTwo, setDieTwo] = useState(1);

    let randomDieRoll = Math.floor(Math.random() * 6);
    var randomNumber = Math.floor(Math.random() * 6);

    const clickHandler = () => {
        setDieOne(randomDieRoll);
        setDieTwo(randomNumber);
        console.log({ dieOne, dieTwo })
    }


    return (
        <Fragment>
            <div className='die-container'>
                <Die dieOne={dieOne} dieTwo={dieTwo} />
            </div>
            <button onClick={clickHandler}>Roll Btn</button>
        </Fragment>
    );
};

export default RollDice;