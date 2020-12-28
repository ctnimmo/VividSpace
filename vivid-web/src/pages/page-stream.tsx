// FILEPATH: src/pages/page-stream.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});
    
export interface StreamPageProp {
    classes?: any;
}

const StreamPage = (p: StreamPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Stream</Typography>
                        <Typography variant="caption"></Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                    Wanna Stream? 
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px", padding: "20px" }}>

                <div style={{ display: "flex", flex: 1, margin: "20px", }}>
                    <video width="1300" controls>
                        <source src="./camden1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Paper>

        </div>
    );
};

export default withStyles(styles)(observer(StreamPage));
