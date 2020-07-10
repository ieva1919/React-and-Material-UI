import React, { Fragment, Component } from "react"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default class extends Component {

    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state

        return <Fragment>
            <Button variant="fab" size="medium" onClick={this.handleToggle}>
                <AddCircleIcon />
            </Button>
            <Dialog
                open={open}
                onClose={this.handleToggle}
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}
                    Create a new exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Please fill out the form below
                        <form>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="raised">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    }

}
