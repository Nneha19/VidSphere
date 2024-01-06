import React from 'react';
import { CircularProgress} from '@mui/material';
import Box from '@mui/material/Box'; // Import Box from @mui/material
import {Stack} from '@mui/material'
const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;