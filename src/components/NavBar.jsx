import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constant'
import SearchBar from './SearchBar'
import Typography from '@mui/material/Typography'; 

const NavBar = (props) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems='center'
      p={2}
      position='sticky'
      zIndex='10'
      sx={{
        background: "#000",
        top: 0,
        justifyContent: 'space-between',
        gap: { xs: '15px', md: '0' },
      }}
    >
      <Link to='/' style={{ display: "flex", alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        <Typography variant='h5' sx={{color:'#FFF', padding:'5px'}}>
              VidSphere
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}
export default NavBar