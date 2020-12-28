// FILEPATH: src/pages/page-requests.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});
    
export interface RequestsPageProp {
    classes: any;
}

const RequestsPage = (p: RequestsPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Requests</Typography>
                        <Typography variant="caption"></Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                        This is Vivid, a Live Stream Request Service, where you get paid by users for your live streams. 
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(observer(RequestsPage));
