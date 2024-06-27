import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Form from './Form'; 
import FileButton from './FileButton';
import { Box, Container, Grid, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor:'primary.main'}}>
        <Tabs value={value} onChange={handleChange} textColor='secondary' aria-label="basic tabs example">
          <Tab label="Open csv" {...a11yProps(0)} />
          <Tab label="Form" {...a11yProps(1)} />
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={1}>
        <Box sx={{border: 1, borderColor: 'divider', borderRadius: 2, bgcolor: 'secondary.main', mt: 8}}>
            <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
                Enviar arquivo
            </Typography>
            <Typography variant="h2" textAlign="center" sx={{ mt: 3 , mx: 2}}>
                Selecione arquivos com extensão .csv ou .xlsx
            </Typography>
            <Typography variant='body1' textAlign="center" sx={{mt: 10, mb: 5}}>
                <FileButton />
            </Typography>
        </Box>        
      </CustomTabPanel>


      <CustomTabPanel value={value} index={0}>
        <Form></Form>
      </CustomTabPanel>
      
    </Box>
  );
}
