import React from 'react'
import { useState, useEffect } from "react";
import duvartipiilk from "../assets/img/duvartipi-1.png";
import duvartipiikinci from "../assets/img/duvartipi-2.png";
import yertipi from "../assets/img/yertipi.png";
import anasayfa1 from "../assets/img/anasayfa-1.jpg";
import anasayfa2 from "../assets/img/anasayfa-2.jpg";
import 'animate.css';

import TrackVisibility from 'react-on-screen';
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'left',
    color: '#fff',
    marginBlockEnd: '20px',
  
}));
function AboutHome() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Who are we?", "What are we doing?","What are we aiming for?"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 4000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <div>
            <div className="about-section">
                <h1>About Us Page</h1>
                <h3><b>{text}</b></h3>
                <p>Our aim is to combine artificial intelligence and vertical farming to provide a space in our homes with healthy, fast and self-growth plants. This provided area will visually satisfy our customers with a decorative presentation that will not cause a loss in the total volume of the house.</p>
                <p>
To be able to protect the health of people in a time when it is so difficult to live healthy; We want to ensure easy access to fresh, healthy and naturally produced food. By offering different designs, we try to ensure that people can use this product and find it decorative.</p>
            </div>
           

        </div>
    )
}

export default AboutHome
