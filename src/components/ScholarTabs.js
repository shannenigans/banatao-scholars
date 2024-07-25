import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const labels = ['All', 'Departments', 'Class']
export default function ScholarTabs() {
  const [value, setValue] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        { labels.map((label) => (<Tab value={label} label={label} />))}
      </Tabs>
    </Box>
  );
}