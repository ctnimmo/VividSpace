// FILEPATH: src/pages/page-request-view.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from '@material-ui/core/Divider';
import TrafficIcon from '@material-ui/icons/Traffic';

const styles = theme => ({});
    
export interface RequestViewPageProp {
    classes?: any;
}

const RequestViewPage = (p: RequestViewPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Request View</Typography>
                        <Typography variant="h6">dave34</Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px", padding:"20px" }}>

                <div style={{ display: "flex", flex: 2, margin: "20px", }}>
                            <div style={{ flex: 2 }}>
                        <Typography variant="button">HOW'S THE PEOPLE TRAFFIC IN CANDEM TOWN?</Typography>
                            </div>
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
                            <div style={{ flex: 1 }}>
                                <button style={{ flex: 1, padding: "10px" }} onClick={(e)=>{window.location.href = '#/App/MicroPay/CamdenTown'}}><Typography variant="button">ACCEPT REQUEST</Typography></button>
                            </div>
                            <div style={{ flex: 1 }}>
                                <button style={{ flex: 1, padding: "10px" }} onClick={(e)=>{window.location.href = '#/App/RequestStream'}}><Typography variant="button">CANCEL</Typography></button>
                            </div>
                        </div>

            </Paper>
        </div>
    );
};

export default withStyles(styles)(observer(RequestViewPage));
