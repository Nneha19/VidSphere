import React from 'react'
import Box from '@mui/material/Box'; // Import Box from @mui/material
import Stack from '@mui/material/Stack'; // Import Stack from @mui/material
import {VideoCard,Loader, ChannelCard} from './'


const Videos=({videos, direction}) =>{
    if(!videos?.length) return <Loader />;
  
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    )
}


export default Videos