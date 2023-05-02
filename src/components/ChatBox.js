import { Button, Container } from '@mui/material'
import React from 'react'
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face6Icon from '@mui/icons-material/Face6';

function ChatBox() {
  return (
    <Container>
        <div></div>
        <div>
        <Button variant="outlined" size="string"><Face2Icon/>ABC</Button>
        <Button variant="outlined" size='string'><Face3Icon/>DEf</Button>
        <Button variant="outlined" size='string'><Face4Icon/>GHI</Button>
        <Button variant="outlined" size='string'><Face6Icon/>JKL</Button>
        </div>
    </Container>
  )
}

export default ChatBox
