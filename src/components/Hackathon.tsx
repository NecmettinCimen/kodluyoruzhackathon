import * as React from 'react';
import Box from './Box';
import './Hackathon.css';

const Hackathon = () => (
    <div className='hackathon-container'>
        <div className="header">
        <h1 className="header-text">Başvuru Süreci Devam Eden Hackathonlar</h1>
        </div>
        <div className='box-container'>
            {Box('','','')}
            {Box('','','')}
            {Box('','','')}
        </div>
    </div>
);



export default Hackathon