import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import './styles.css';

const spinner = () => (
    <Box sx={{ width: '90%', margin: '3rem' }}>
      <LinearProgress />
    </Box>
)

export default spinner;