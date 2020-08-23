import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Header: FC = () => (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                YuraOvcharov
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header
