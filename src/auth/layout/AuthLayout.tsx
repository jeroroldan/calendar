import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout:FC<Props> = ({ children, title='' }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2, width:{ md:450 }  }}
      >
        <Typography variant="h5" sx={{ marginBottom: 5 }}>
          { title }
        </Typography>
          { children }
        </Grid>

      </Grid>
    
  )
}
