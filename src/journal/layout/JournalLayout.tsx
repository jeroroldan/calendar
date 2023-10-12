import { Box } from '@mui/material';
import { FC } from 'react';
import { NavBar, SideBar } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const drawerWidth = 250;

export const JournalLayout:FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display:'flex' }}>

      <NavBar drawerWidth= { drawerWidth }/>

      <SideBar drawerWidth={ drawerWidth } />

      <Box 
        component='main'
        sx={{ flexGrow:1, p: 3 }}
      >
        { children }
      </Box>

    </Box>
  )
}
