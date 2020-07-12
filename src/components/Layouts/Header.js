import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from "../Exercises/Dialog"

function Header({ muscles, onExerciseCreate }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                    Exercises database
                </Typography>
                <Dialog
                    muscles={muscles}
                    onCreate={onExerciseCreate}
                />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
