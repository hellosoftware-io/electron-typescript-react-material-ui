import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Person, Group, Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBar(props: any) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', marginTop:'auto' }}>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          props.setValue(newValue);
        }}
      >
        <BottomNavigationAction value='single' icon={<Person />} />
        <BottomNavigationAction value='multiple' icon={<Group />} />
        <BottomNavigationAction value='config' icon={<Settings />} />
      </BottomNavigation>
    </Box>
  );
}
