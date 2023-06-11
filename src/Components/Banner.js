
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
export const Banner = () => {

    return (
        <>
        <Grid 
  >
            <Box sx={{ flexGrow: 1, 
            alignItems:"center",
            justifyContent:"center",
            padding:"38px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sx={{ 
                        minWidth: { xs: "100%", md: "50%" },
                       
                           
                        
                }}>
                        <Item sx ={{  padding:"30px",
                     backgroundColor: 'rgba(0,0,0,0.9)',     
                     height: { xs: "auto", md: "425px" }  
                    
                
                    }}>
                            <TrackVisibility>

                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <div className="banner-card">
                                            <h3>Vertical Farming</h3>
                                            <p>Vertical farming is the practice of growing crops in vertically stacked layers. It combines hydroponic farming techniques such as hydroponics, aquaponics and aeroponics, and controlled-environment farming aimed at optimizing plant growth. </p>
                                            <h3>Smart Vertical Agriculture</h3>
                                            <p>Smart vertical agriculture, on the other hand, is a system that constantly monitors the status of the plant, analyzes the status of the plant and gives you step-by-step instructions and notifications, and also makes the necessary irrigation itself. In addition, it is aimed to provide comfort of use by minimizing the consumption of home use area.</p>
                                        </div>
                                    </div>
                                }

                            </TrackVisibility>
                        </Item>
                        <Item sx ={{  
                      backgroundColor: 'rgba(0,0,0,0)',     
                      height: { xs: "auto", md: "425px" } 
                   
                     
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
                                     <img src={yertipi} width="100%" height="425px" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={duvartipiilk} width="100%" height="425px" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <img src={duvartipiikinci} width="100%" height="425px" />
                                 </SwiperSlide>
                             </Swiper>
                             
                         </Item>
                    </Grid>
                    <Grid item xs={6} sx={{ minWidth: { xs: "100%", md: "50%" },
                    
                       
                     }}>

                        <Item sx ={{ 
                     backgroundColor: 'rgba(0,0,0,0)',  
                     height: { xs: "auto", md: "425px" }
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
                                    <img src={anasayfa2} width="100%" height="425px" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={anasayfa1} width="100%" height="425px" />
                                </SwiperSlide>
                               
                            </Swiper>
                        </Item>
                        <Item sx ={{ 
                            padding:"30px",
                      backgroundColor: 'rgba(0,0,0,0.9)', 
                      height: { xs: "auto", md: "425px" }
                     
                      }}>
 
 <TrackVisibility>
 
 {({ isVisible }) =>
     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
         <div className="banner-card">
             <h3>OUR PRODUCT</h3>
             <p>We all want to consume healthy and organic foods, but we do not have suitable space in our house to grow and the issues to be followed while growing tire us.</p>
             <h3>SELF-GROWING PLANT</h3>
             <p>Thanks to this product, which allows you to grow plants without losing the area of ​​​​the house, you will not have soil and pollution problems and you will be able to easily reach healthy foods. Our smart system constantly analyzes the condition of the plant and provides support in the growth of the plant by giving water to the plant and feeding it with UV rays when necessary. You can instantly follow the status on the screen and be informed.</p>
         </div>
     </div>
 }

</TrackVisibility>
                         </Item>
                    </Grid>

                </Grid>
            </Box>

        </Grid>
      
 
         </>
    )
}
