import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Accordion from '../Accordion/Accordion';
import './Tabs.css';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const f_a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} className="Tab__licitacionTabs" aria-label="basic tabs example">
            <Tab label="Partidas" {...f_a11yProps(0)} />
            <Tab label="Etapas" {...f_a11yProps(1)} />
            <Tab label="Servidores" {...f_a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Accordion/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Etapas
        </TabPanel>
        <TabPanel value={value} index={2}>
          Servidores
        </TabPanel>
      </Box>
    );
  }

export default BasicTabs;
