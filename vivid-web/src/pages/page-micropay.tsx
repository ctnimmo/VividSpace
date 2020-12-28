// FILEPATH: src/pages/page-micropay.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Fab, IconButton, Snackbar, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, Dialog, DialogTitle, DialogContent, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from '@material-ui/core/Divider';
import TrafficIcon from '@material-ui/icons/Traffic';
import { IfWebMonetized } from 'react-web-monetization';
import { IfNotWebMonetized } from 'react-web-monetization';
import { initGlobalWebMonetizationState } from 'react-web-monetization'

initGlobalWebMonetizationState()

const ThanksMessage = props => {
    return <IfWebMonetized>
        <p>Thanks for supporting me!</p>
    </IfWebMonetized>
}

const PleaseMessage = props => {
    return <IfNotWebMonetized>
        <p><b style={{ font: "15px" }}>Please support me with Web Monetization!</b></p>
    </IfNotWebMonetized>
}

const styles = theme => ({});
    
export interface MicroPayPageProp {
    classes?: any;
}

const MicroPayPage = (p: MicroPayPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">MicroPay</Typography>
                        <Typography variant="h6">dave34</Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px", padding:"20px" }}>

                <div style={{ display: "flex", flex: 2, margin: "20px", }}>

                    <div style={{ flex: 1 }}>
                        <Typography variant="caption">Requester: dave34</Typography><br/>
                        <Typography variant="caption">Requester Rank: 25</Typography><br/>
                        <Typography variant="caption">Streamer Rank: 5</Typography><br/>
                        <Typography variant="caption">Resharer Rank: 15</Typography><br/>
                    </div>
                    <div style={{ flex: 1 }}>
                        <Typography variant="caption">Streaming Tags:</Typography><br/>
                        <TrafficIcon/><Typography variant="caption">Traffic</Typography><br/>
                    </div>
                    <div style={{ flex: 2 }}>
                        <Typography variant="button">Payment Processing ...</Typography><br /><br /><CircularProgress /><br /><br />

                        <Typography variant="button">Payment Simulating ...</Typography><br /><br /><CircularProgress /><br /><br />
                        <Typography variant="button">Payment Done ...</Typography><br /><br /><CircularProgress /><br /><br />
                        <Typography variant="button">Transaction Details ...</Typography><br /><br /><CircularProgress /><br /><br />
                    </div>

                    <div style={{ flex: 1 }}>
                        <button style={{ flex: 1, padding: "10px" }} onClick={(e)=>{window.location.href = '#/App/StreamView/CamdenTown'}}><Typography variant="button">CONTINUE</Typography></button>
                    </div>
                </div>

            </Paper>

            <ThanksMessage />

            <PleaseMessage/>
        </div>
    );
};

export default withStyles(styles)(observer(MicroPayPage));
