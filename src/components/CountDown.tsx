"use client"
import React from 'react';
import Countdown from 'react-countdown';
const endDate = new Date("2024-07-25");
const CountDown = () => {
    return (
        <div className='py-3'>
            <Countdown className='text-3xl font-bold text-yellow-300' date={endDate}/>
        </div>
    );
};

export default CountDown;