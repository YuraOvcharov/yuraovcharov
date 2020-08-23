import React, { FC } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core'
// eslint-disable-next-line camelcase
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import Routes from './routes'

const theme = unstable_createMuiStrictModeTheme()

const App: FC = () => (
    <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    </>
)

export default App
