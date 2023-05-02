import { Grid, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import { Grid3x3Rounded } from '@mui/icons-material';


const backImg = require("./dis1.webp");
const dispPic = require("./disp.jpeg");

function Display() {
  return (


    <Container maxWidth="xs">
            <Grid xs={12} justify="space-between"  
                style={{backgroundImage: `url(${backImg})`,   
                height:'200px',
                marginTop: 20, 
                backgroundSize:'cover'
                }}>
                   
            </Grid>
      <Grid container justifyContent={'space-between'}> 
            <Grid item xs={6} >
                        <div style={{
                            backgroundImage: `url(${dispPic})`, 
                            marginTop: '20',
                            borderRadius: '50%',
                            height: '100px',
                            width: '100px',
                            zIndex: '10',
                            }}></div>

            </Grid>
            <Grid item xs={6}>
                <InstagramIcon />
            </Grid>
      </Grid>
    </Container>
  )
}

export default Display


/* <Box 
            component="img"
            sx= {{
                height: 233,
                width: 350,
                maxHeight: {xs: 233},
                maxWidth: {xs: 350},
            }}
            alt="Display"
            
            >
                
      </Box> */
      /* <div style={{backgroundImage: `url(${BackImg})`}}></div>*/