
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as React from 'react';
import { StaffCard } from "./StaffCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.8)',
  padding: theme.spacing(5),
  marginBlockStart: '30px !important',
  marginLeft: '70px',
  marginRight: '70px',
  marginBottom: '50px',
  textAlign: 'center',
  alignItems: 'center',
  color: '#fff',
  position: 'releative',
}));


export const StaffSlider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const OurStaff = [
    {

        name: "Hilal Hatunoğlu",
        title: "CO-FOUNDER",
        description: "It was very enjoyable for me to lead the team of such a project. I hope our project reaches its goal.",
        imgUrl: "https://picsum.photos/200/300?v=15",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        github: "https://github.com/"
      },
    {

      name: "Hilal HATUNOĞLU",
      title: "FRONTED CONSULTANT",
      imgUrl: "https://picsum.photos/200/300?v=14",
      description: "Hello, I felt very lucky for the transmission of my work in the Frontend part of this contract.",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      github: "https://github.com/"
    },
   
    {

        name: "Tuba Aslan Khalifa",
        title: "PROJECT ADVISER",
        description: "It was very enjoyable for me to lead the team of such a project. I hope our project reaches its goal.",
        imgUrl: "https://picsum.photos/200/300?v=15",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        github: "https://github.com/"
      },
     
   
   


  ];
  return (
    <section >
      <Grid>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Item>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h3>Our Team</h3><br />
                      <p>
Our Teammates Who Contributed to the Realization of This Project</p>
                      <br />
                      <div >
                        <Grid > 
                          <Carousel responsive={responsive} infinite={true} >
                            {
                              OurStaff.map((OurStaff, index) => {
                                return (
                                  <div className="item">
                                    <StaffCard key={index} {...OurStaff} />
                                  </div>
                                )
                              })
                            }

                          </Carousel>
                        </Grid>
                      </div>
                    </div>
                  }

                </TrackVisibility>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </section>
  )
}
