// FILEPATH: src/pages/page-request-stream.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from '@material-ui/core/Divider';
import TrafficIcon from '@material-ui/icons/Traffic';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, CircularProgress, List, MenuItem, TableRow, TableCell, Table, TableBody, TableHead, Checkbox } from '@material-ui/core';

const styles = theme => ({
    map: {
        overflow: "hidden",
        width: "1400px",
        position: "relative"
    },
    mapFrame: {
        width: "1400",
        height: "700" 
    },
    ind:{
        zIndex:100
    }
});
    
export interface RequestStreamPageProp {
    classes?: any;
}

const RequestStreamPage = (p: RequestStreamPageProp) => {
    return (
        <div color="inherit">
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Request Stream</Typography>
                        <Typography variant="caption"></Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                    Currently trending requests 
                    </div>
                    <div style={{ flex: 1 }}>
                    Search <TextField/> 
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                        <div className={p.classes.map} id="map_canvasyOptions">
                        <iframe className={p.classes.mapFrame} src="https://maps.google.com/maps?width=1400&amp;height=700&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>

                    </div>

                    <div style={{ flex: 1}}>
 
                        <div style={{ flex: 1, margin: "20px" }}>
                            <div style={{ flex: 1 }}>
                                <button style={{ flex: 1, padding: "0px" }}><AddBoxIcon/></button>
                            </div>
                            <div style={{ flex: 1 }}>
                                <Typography variant="button">CREATE A NEW REQUEST</Typography>
                            </div>
                        </div>

                        <Divider/>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <div style={{ flex: 1 }}>
                                    <Typography variant="button">REQUESTS</Typography>
                                </div>
                            </div>
                        <Divider/>

                        <div style={{ flex: 2, margin: "20px", }}>
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
                            <div style={{ flex: 2 }}>
                                <button style={{ flex: 1, padding: "10px", color: "primary" }} onClick={(e)=>{window.location.href = '#/App/RequestView/CamdenTown'}}><Typography variant="button">VIEW REQUEST</Typography></button>
                            </div>
                        </div>

                        <div style={{ flex: 1, margin: "20px" }}>
                            <div style={{ flex: 1 }}>
                                <Typography variant="button">How's the weather in central London?</Typography>
                            </div>
                            <div style={{ flex: 1 }}>
                                <button style={{ flex: 1, padding: "10px" }}><Typography variant="button">VIEW REQUEST</Typography></button>
                            </div>
                        </div>

                        <div style={{ flex: 2, margin: "20px" }}>
                            <div style={{ flex: 2 }}>
                                <Typography variant="button">Can you show me the football match (Arsenal v. Tottenham)?</Typography>
                            </div>
                            <div style={{ flex: 1 }}>
                                <Typography variant="caption">Requester: Polly-2-Shoes</Typography><br/>
                                <Typography variant="caption">Requester Rank: 75</Typography><br/>
                                <Typography variant="caption">Streamer Rank: 0</Typography><br/>
                                <Typography variant="caption">Resharer Rank: 1</Typography><br/>
                            </div>
                            <div style={{ flex: 1 }}>
                                <Typography variant="caption">Streaming Tags:</Typography><br/>
                                <Typography variant="caption">Football</Typography><br/>
                            </div>
                            <div style={{ flex: 2 }}>
                                <button style={{ flex: 1, padding: "10px" }}><Typography variant="button">VIEW REQUEST</Typography></button>
                            </div>
                        </div>

                    </div>

                </div>
            </Paper>

        </div>
    );
};

export default withStyles(styles)(observer(RequestStreamPage));

function OpenDialogue(id: string):void {
    return (<Dialog id="ben" open={true} maxWidth="md" fullWidth onClose={closer}>
    <DialogTitle>
        <div style={{ display: "flex" }}>
            <div style={{ flex: 4 }}>
                Product Search<DialogContentText>Search stylecode or product name</DialogContentText>
            </div>
            <div style={{ flex: 1 }}>
                {productLookup.loading ? <div style={{ textAlign: "right" }}>
                    <CircularProgress />
                </div> : null}
            </div>
        </div>
    </DialogTitle>
    <DialogContent style={{ maxHeight: "300px", padding: "0px" }}>
    </DialogContent>
    <DialogActions>
        <Button>
            Cancel
      </Button>
        <Button>
            Select Products
      </Button>
    </DialogActions>
</Dialog >)
}
