// FILEPATH: src/pages/page-stream-view.tsx

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
    
export interface StreamViewPageProp {
    classes?: any;
}

const StreamViewPage = (p: StreamViewPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Stream View</Typography>
                        <Typography variant="h6">Broadcasting to dave34</Typography>
                        <Typography variant="h6">HOW'S THE PEOPLE TRAFFIC IN CANDEM TOWN?</Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px", padding:"20px" }}>

                <div style={{ display: "flex", flex: 1, margin: "20px", }}>
                    <video width="1300" controls>
                        <source src="./camden1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Paper>
        </div>
    );
};

export default withStyles(styles)(observer(StreamViewPage));
