import { Grid, Container } from '@mui/material'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container maxWidth="xs">
        <Grid container justifyContent="space-between"> 
            <Grid item xs={3}>
                <AccountCircleIcon></AccountCircleIcon>
            </Grid>
            <Grid item xs={3}>
            <span>Simran Kaur</span>
            </Grid>
            <Grid item xs={3}>
            <Link to="/message">
                <MessageOutlinedIcon></MessageOutlinedIcon>
            </Link>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Header
