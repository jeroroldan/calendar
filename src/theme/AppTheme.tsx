import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
}


export const AppTheme:FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
