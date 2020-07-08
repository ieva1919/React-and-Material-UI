import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const style = {
    Paper: {
        padding: 20,
        margin: 20,
        height: 500,
        overflow: "auto"
    }
}

export default ({ exercises }) =>
    <Grid container>
        <Grid item xs>
            <Paper style={style.Paper}>
                {exercises.map(([exercise, exercises]) =>
                    <Fragment>
                        <Typography
                            variant="h6"
                            style={{ textTransform: "capitalize" }}
                        >
                            {exercise}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper style={style.Paper}>
                <Typography
                    variant="h4"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="h6"
                    style={{ marginTop: 20 }}
                >
                    Please select an exercise from the list on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid >