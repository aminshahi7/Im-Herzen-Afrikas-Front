import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Test(){

    const date = new Date();
    const currentDate = date.getMonth();




    return (
        <div className="App">
            <h1>Datum von Heute</h1>
            <h3>{`${currentDate}`}</h3>

        </div>
    );
}

export default Test;