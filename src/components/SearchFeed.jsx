import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'; // Import Box from @mui/material
import Typography from '@mui/material/Typography'; // Import Typography from @mui/material
import {Videos} from '../components'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';


const SearchFeed = (props) => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])


  return (
      <Box p={2} sx={{overflowY:'auto',
       height:'90vh', flex:2}}>
      <Typography variant='h6'
     
      mb={2}
      sx={{color:'white', paddingLeft:'15px'}}>
          Search results for "<span style={{color:'#F31503'}}>
          {searchTerm}
        </span>"
      </Typography>
      <Videos videos={videos}/>
      </Box>
  );
};

export default SearchFeed;
