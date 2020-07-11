import React, { Fragment, Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    FormControl: {
        width: 500,
    },
});

export default withStyles(styles)(class extends Component {

    state = {
        open: false,
        exercise: {
            title: "",
            description: "",
            muscles: "",
        }
    }

    handleToggle = () => {
        console.log('ffff')
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
    };

    handleSubmit = () => {
        const { exercise } = this.state
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
        })

        this.setState({
            open: false,
            exercise: {
                title: "",
                description: "",
                muscles: "",
            }
        })
    }

    render() {
        const { open, exercise: { title, description, muscles } } = this.state,
            { classes, muscles: categories } = this.props

        return <Fragment>
            <IconButton variant="fab" onClick={this.handleToggle} size="medium" color="inherit">
                <AddCircleIcon />
            </IconButton >
            <Dialog
                open={open}
                onClose={this.handleToggle}
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Create a new exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Please fill out the form below
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            rowsMax={4}
                            value={title}
                            onChange={this.handleChange('title')}
                            className={classes.FormControl}
                        />
                        <br />
                        <FormControl className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">
                                muscles
                            </InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange('muscles')}
                            >
                                {categories.map(category =>
                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            multiline
                            rows="4"
                            label="Description"
                            rowsMax={4}
                            value={description}
                            onChange={this.handleChange('description')}
                            className={classes.FormControl}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={this.handleSubmit}
                        color="primary"
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    }

}
)
