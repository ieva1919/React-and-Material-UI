import React from 'react'
import Grid from '@material-ui/core/Grid'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
    Paper: {
        padding: 20,
        margin: 20,
    }
}

export default props =>
    <Grid container>
        <Grid item xs>
            <LeftPane style={style} />
        </Grid>
        <Grid item xs>
            <RightPane style={style} />
        </Grid>
    </Grid>