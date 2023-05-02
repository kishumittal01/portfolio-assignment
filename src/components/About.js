import React from 'react';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Container } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

function About() {
  return (
        <Link to="/">
            <Container maxWidth="xs">
                <h4>Simran Kaur <PlayArrowIcon color='secondary'/></h4>
                <h6>So many of smiles are because of you. So grateful to be sharing my world</h6>
                <div>
                    <h6>Content Creator since 2019 - Mumbai, India</h6>
                </div>
                <Button variant="outlined">Fashion</Button>
                <Button variant="outlined">Fitness</Button>
                <div>
                    <Link to={"/message"}>   
                        <Button variant="contained" color='secondary' size='large'><MessageOutlinedIcon></MessageOutlinedIcon>  Chat</Button>
                    </Link>
                    <Button variant="outlined"><PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>Invite</Button>
                    <Button variant='outlined' style={{borderRadius: "100%"}}>...</Button>

                </div>
            </Container>
        </Link>
  )
}

export default About
