import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from "../Exercises/Dialogs/Create"

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                    Exercises database
                </Typography>
                <CreateDialog />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
