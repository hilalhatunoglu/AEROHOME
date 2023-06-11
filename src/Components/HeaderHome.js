import { useState, useEffect } from "react";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0.9)',
    textAlign: 'left',
    color: '#fff',
    marginBlockEnd:"0px!important"
  }));
  
export const HeaderHome = () =>{ 
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Fresh Foods", "Healthy Foods", "Natural Foods"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
        
        setText(updateText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <Box sx={{ flexGrow: 1,
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:"38px",
          paddingRight:"38px",
          paddingTop:"38px"
          } }>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item sx={{padding:"30px"}}> 
                <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <div className="banner">
                        <h3>Hello!</h3>
                        <h3>{`At Your Home With Smart Vertical Agriculture `}<span className="wrap">{text}</span> You can breed!</h3>
                        <p>Want to grow your own food at home in a time when healthy eating is so difficult? <br/> Thanks to smart vertical farming, you can grow your own food at home without soil and without loss of space, and you can reach healthy food whenever you want.</p>             
                       <Box><Button 
                      
                       href="/Contact"
                       sx={{
                         paddingLeft:'0%',
                         color: '#fff',
                         textDecoration: 'none',
                       }}
                       
                >Contact</Button><ArrowRightCircle size={25} /></Box> 
                        </div> 
                        </div>
                        }
                        
                        </TrackVisibility>
            </Item>
          </Grid>
          
        </Grid>
      </Box>
      

    )
}
