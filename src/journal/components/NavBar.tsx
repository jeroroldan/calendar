import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from "react";

interface Props {
  drawerWidth: number;
}

export const NavBar:FC<Props> = ({ drawerWidth = 240 }) => {
  return (
    <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${ drawerWidth }px)` } , ml:`${ drawerWidth }px` }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr:2 , display: { sm: 'none' } }}
        >
          <MenuOpenOutlined />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant="h6" noWrap component='div'> Journal App </Typography>
          <IconButton color="error">
            <LogoutOutlined/>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
