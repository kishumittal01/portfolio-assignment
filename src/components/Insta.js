import { Link } from 'react-router-dom';
import { Instagram } from '@mui/icons-material'
import { Button, Container } from '@mui/material'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import React from 'react'

function Insta() {
  return (
    <Link to="/">
        <div>
        <Container>
            <div>
                <Instagram ></Instagram>
                <h6>@simran_kaur</h6>
                <h6>Instagram</h6>
                <LaunchOutlinedIcon></LaunchOutlinedIcon>
            </div>
            <div>
                <h4>2.4 M      100K+</h4>
                <h6>Followers   Content Reach</h6>
            </div>
            <Button variant="outlined" color="secondary" size="large"><EqualizerIcon></EqualizerIcon>View Insights</Button>
        </Container>
        </div>
        </Link>
  )
}

export default Insta
