import React, { Fragment, Component } from "react"
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Form from "./Form"

export default class extends Component {

    state = {
        open: false,
    }

    handleToggle = () => {
        console.log('ffff')
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state,
            { muscles, onCreate } = this.props

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
                    <Form
                        muscles={muscles}
                        onSubmit={onCreate}
                    >
                    </Form>
                </DialogContent>
            </Dialog>
        </Fragment >
    }
}
