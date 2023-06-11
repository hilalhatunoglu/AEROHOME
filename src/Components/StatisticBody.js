import { useState, useEffect } from "react";
import duvartipiilk from "../assets/img/duvartipi-1.png";
import duvartipiikinci from "../assets/img/duvartipi-2.png";
import bir from "../assets/img/1.jpg";
import iki from "../assets/img/2.jpg";
import uc from "../assets/img/3.jpg";
import dort from "../assets/img/4.jpg";
import bes from "../assets/img/5.jpg";
import alti from "../assets/img/6.jpg";
import yedi from "../assets/img/7.jpg";
import sekiz from "../assets/img/8.jpg";
import dokuz from "../assets/img/9.jpg";
import on from "../assets/img/10.jpg";
import onbir from "../assets/img/11.jpg";
import oniki from "../assets/img/12.jpg";
import onuc from "../assets/img/13.jpg";
import ondort from "../assets/img/14.jpg";
import Poster from "../assets/img/Poster.png";
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

export const StatisticBody = () => {
    
const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'left',
    color: '#fff',
    
  
}));
    return (
        <>
        <Grid >
        <Box sx={{ flexGrow: 1,
        alignItems:"center",
       
        }}>
                <Grid container spacing={0}>
                    <Grid item xs={4} sx={{ 
                        minWidth: { xs: "100%", md: "45%" },
                        padding:"20px",
                        alignItems: "center",
                       
                            
                        
                }}>
                        <Item >
                            <TrackVisibility>

                                {({ isVisible }) =>
                                    <img src={Poster} width="100%" height="100%" />
                                }

                            </TrackVisibility>
                        </Item>

                    </Grid>
                    
                    <Grid item xs={6} sx={{ 
                        minWidth: { xs: "100%", md: "45%" },
                        padding:"20px",
                        alignItems: "center",
                        
                            
                        
                }}>
                        <Item sx={{ padding: "30px",
                    marginBlockEnd:{ xs: "30px", md: "20px" },}}>
                        <Swiper
                                 // install Swiper modules
                                 modules={[Pagination, A11y]}
                                 spaceBetween={1500}
                                 slidesPerView={1}
                                 pagination={{ clickable: true }}
                                 onSwiper={(swiper) => console.log(swiper)}
                                 onSlideChange={() => console.log('slide change')}
                             >
                                 <SwiperSlide>
                                     <img src={bir} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={iki} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={uc} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={dort} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={bes} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={alti} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={yedi} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={sekiz} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={dokuz} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={on} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={onbir} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={oniki} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={onuc} width="100%" height="auto" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={ondort} width="100%" height="auto" />
                                 </SwiperSlide>
                                
                             </Swiper>
                             
                        </Item>
                        <Item sx ={{  
               
                      backgroundColor: 'rgba(0,0,0,0.9)',     
                      padding:"30px",
                     
                   
                     
                     }}>
                          <Swiper
                                 // install Swiper modules
                                 modules={[Pagination, A11y]}
                                 spaceBetween={1500}
                                 slidesPerView={1}
                                 pagination={{ clickable: true }}
                                 onSwiper={(swiper) => console.log(swiper)}
                                 onSlideChange={() => console.log('slide change')}
                             >
                                 <SwiperSlide>
                                 <h3>
Survey Results Evaluation</h3>
                        <br/>
<p><span>When the results of the survey are examined, the gender ratio is 40% male, while 60% is female, and 20% of the age ranges are 10 people between the ages of 18-25, 26.7% are 13 people between the ages of 25-35, 26%. It was determined that there were 14 people, 0.7 of whom were between the ages of 35-45, 20 percent were between the ages of 45-55, 10, 19%, and finally 1.67% were 3 people aged 65 and over. It has been seen that the education levels of the people who are mostly primary and secondary school graduates are higher than those with undergraduate or graduate degrees, and most of the respondents reside in the province of Istanbul. It has been determined that there are more people who are housewives. However, when the house types of the people who participated in our survey are examined, the number of apartments with a garden or a detached house with a garden is higher than an apartment without a garden, a detached house without a garden or a complex.</span><br /><br /></p>
                 
                                 </SwiperSlide>
                                 <SwiperSlide>
                                <br/>
                                <br/> <br/>
                                 <p>The number of people who like to grow plants in their homes is quite high and they also have plant growing areas. However, among the plants grown, green leafy plants are more, and vegetables and fruits such as tomatoes, salads, peppers and strawberries are in the selection. It has been observed that people are conscious while growing these plants and provide sufficient watering and daylight for the plant. However, it has been noticed that by doing their maintenance sometimes, they hinder their follow-up. In addition, it was seen that decoration is important when growing plants, and 86.7% did not want to lose anything from their fields by growing plants in relation to vertical agriculture.</p>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                 <br/> <br/>
                                 <p>When a question was asked about vertical farming, 53.3% answered no, I have not heard of it before, while 46.7% answered yes, I have heard it before. The majority of those who heard it, in turn, heard it from social media, television, news applications and friends. Thus, it was concluded that social media is used much more actively. It has been concluded that vertical farming is necessary for the majority and it has been seen that it provides organic food, constantly fresh, fast, and can provide benefits in terms of space. Thus, the rate of those who want to bring vertical farming to their homes was determined as 53.3%. However, those who had no knowledge about the benefits of vertical farming were determined as 40%. For this, it is aimed to reduce the rate of those who do not have knowledge in vertical agriculture by establishing a website that will inform people and also market it. 60% of the respondents declared that they would like to use this wonderful technology in every aspect.</p>                                 
                                 </SwiperSlide>        
                                 <SwiperSlide>
                                <br/><br/>  <br/><br/><br/><br/>
                                 <p>Our product, AeroHome, did not compromise on decoration, and wanted people to have pleasant-looking areas in their homes by minimizing the maintenance time with this technological product, even if it is small.</p>                                 
                                 </SwiperSlide>
                             </Swiper>
                           
                      
                     </Item>
                    </Grid>

                </Grid>
            </Box>


        </Grid>
      


         </>
    )
}
