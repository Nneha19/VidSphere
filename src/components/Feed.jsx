import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'; // Import Box from @mui/material
import Stack from '@mui/material/Stack'; // Import Stack from @mui/material
import Typography from '@mui/material/Typography'; // Import Typography from @mui/material
import {Sidebar,Videos} from '../components'
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = (props) => {

  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } , height: '100vh'}}>
      <Box sx={{ height:{sx:'auto', md:'92vh'},
              borderRight:'1px solid #3d3d3d',
              px:{sx:0, md:2}  }}>
       <Sidebar 
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
       />
      </Box>

      <Box p={2} sx={{overflowY:'auto',
       height:'90vh', flex:2}}>
      <Typography variant='h4'
      fontWeight='bold'
      mb={2}
      sx={{color:'white'}}>
        {selectedCategory}<span style={{color:'#F31503'}}>
          
        </span>
      </Typography>
      <Videos videos={videos}/>


      <Typography className='copyright'
       variant='body2' sx={{mt:1.5, color:'#808080', textAlign:'center'}}>
        Copyright 2024 VidSphere
       </Typography>
      </Box>
     
    </Stack>
  );
};

export default Feed;
