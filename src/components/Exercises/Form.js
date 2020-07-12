import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    FormControl: {
        width: 500,
    },
});

const style = {
    MarginTop: {
        marginTop: 10,
    }
}



export default withStyles(styles)(class extends Component {
    state = this.getInitstate()

    getInitstate() {
        const { exercise } = this.props

        return exercise ? exercise : {
            title: " ",
            description: " ",
            muslces: " "
        }
    }

    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = () => {
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        })

        this.setState(this.getInitstate())
    }

    render() {
        const { title, description, muscles } = this.state,
            { classes, exercise, muscles: categories } = this.props

        return <form>
            <TextField
                label="Title"
                rowsMax={4}
                value={title}
                onChange={this.handleChange('title')}
                className={classes.FormControl}
            />
            <br />
            <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="Muscles">
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
            <br />
            <Button style={style.MarginTop}
                variant="contained"
                onClick={this.handleSubmit}
                color="primary"
            >
                {exercise ? "Edit" : "Create"}
            </Button>
        </form>
    }
}
)