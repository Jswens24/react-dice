import React, { Fragment, useState } from 'react';
import './Die.css'

const Die = (props) => {
    const dieClasses = ['one', 'two', 'three', 'four', 'five', 'six']

    return (
        <Fragment>
            <i class={`fas fa-dice-${dieClasses[props.dieOne]}`}></i>
            <i class={`fas fa-dice-${dieClasses[props.dieTwo]}`}></i>
        </Fragment>
    );
};

export default Die;