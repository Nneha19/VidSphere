import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail=(props)=> {
    const [channelDetail,setChannelDetail]=useState(null);
    const [videos, setVideos] = useState([])
    
    const {id}=useParams();
 console.log(channelDetail)
    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=>setChannelDetail(data?.items[0]))

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>setVideos(data?.items))
    
    },[id])

    return (
       <Box minHeight='95vh'>
        <Box>
            <div style={{
                background:' radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
                zIndex:10,
                height:'160px'
           }}/>
           <ChannelCard channelDetail={channelDetail}
           marginTop='-125px'/>
        </Box>
        <Box display="flex" p='2'>
            <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos}/>
        </Box>
       </Box>
    )
}

export default ChannelDetail