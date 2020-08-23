import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Containers from './containers';


const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Containers />
      </ThemeProvider>
    </>
  );
}

export default App;
