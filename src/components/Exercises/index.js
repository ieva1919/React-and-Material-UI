import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Form from "./Form"

const style = {
    Paper: {
        padding: 20,
        marginTop: 5,
        height: 500,
        overflow: "auto"
    }
}

export default ({ muscles, exercises, category, editMode, onSelect, exercise, exercise: { id, title = "Welcome", description = "Please select an exercise from the list on the left." }, onDelete, onSelectEdit, onEdit }) =>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={style.Paper}>
                {exercises.map(([exercise, exercises]) =>
                    !category || category === exercise
                        ?
                        <Fragment key={exercise}>
                            <Typography
                                variant="h6"
                                style={{ textTransform: "capitalize" }}
                            >
                                {exercise}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) =>
                                    <ListItem button
                                        key={id}
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => onSelectEdit(id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper style={style.Paper}>
                {editMode
                    ?
                    <Form
                        muscles={muscles}
                        onSubmit={onEdit}
                        exercise={exercise}
                    />
                    :
                    <Fragment>
                        <Typography
                            variant="h4"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{ marginTop: 20 }}
                        >
                            {description}
                        </Typography>
                    </Fragment>
                }
            </Paper>
        </Grid>
    </Grid >