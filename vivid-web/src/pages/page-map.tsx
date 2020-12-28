// FILEPATH: src/pages/page-map.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { decorate, observable, action, computed } from "mobx";
import { Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions, Button, CircularProgress, List, MenuItem, TableRow, TableCell, Table, TableBody, TableHead, Checkbox } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

class MapPageProp implements IMapPageProp{
    classes: any;
    requestsProp: RequestsProp;
    constructor(){
        this.requestsProp = new RequestsProp(true);
    }

}

export interface IMapPageProp {
    classes: any;
    requestsProp: RequestsProp;
}

const MapPage = (p: IMapPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Map (REQUSTS)</Typography>
                        <Typography variant="caption"></Typography>
                    </div>
                </div>
            </Paper>
            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                        <div className={p.classes.map} id="map_canvasyOptions">
                        <iframe className={p.classes.mapFrame} src="https://maps.google.com/maps?width=1400&amp;height=700&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
                        </div>

                    </div>

                    <div style={{ flex: 1}}>
                    
                        <div style={{ flex: 1 }}>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <Typography variant="button">Request:<br/>How's the traffic on Picadilly Circus?</Typography>
                            </div>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <button style={{ flex: 1, padding: "10px" }}><Typography variant="button">ACCEPT</Typography></button>
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <Typography variant="button">Request:<br/>How's the traffic on Picadilly Circus?</Typography>
                            </div>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <button style={{ flex: 1, padding: "10px" }}><Typography variant="button">ACCEPT</Typography></button>
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <Typography variant="button">Request:<br/>How's the traffic on Picadilly Circus?</Typography>
                            </div>
                            <div style={{ flex: 1, margin: "20px" }}>
                                <button style={{ flex: 1, padding: "10px" }}><Typography variant="button">ACCEPT</Typography></button>
                            </div>
                        </div>

                    </div>

                </div>
            </Paper>

            <Requests {... new RequestsProp(true)}/>

        </div>
    );
};

export default withStyles(styles)(observer(MapPage));

class RequestsProp implements IRequestProp{

    classes:any;
    public open: boolean;
    // onclose: (event:{},reason:"backdropClick"|"escapeKeyDown")=>void;

    constructor(open?: boolean){
        this.open = open;
        // this.onclose = c
    }

    onclose(event:{},reason:"backdropClick"|"escapeKeyDown"){
        this.open =  false;
    }

    oncloser(event:{},reason:"backdropClick"|"escapeKeyDown"){
        this.open =  false;
    }

    opener(event:{},reason:"backdropClick"|"escapeKeyDown"){
        this.open =  true;
    }
}

decorate(RequestsProp, {
    open: computed,
    onclose: action.bound,
    opener: action.bound

});

interface IRequestProp {
    classes?: any;
    open?: boolean;
    onclose?: (event:{},reason:"backdropClick"|"escapeKeyDown")=>void;
}

const Requests = withStyles(styles)(observer((p:IRequestProp) => {

    return (<Dialog open={p.open} maxWidth="md" fullWidth color="primary" onClose={p.onclose} className={p.classes.ind}>
                <DialogTitle>
                    <div style={{ display: "flex" }}></div>
                    <TextField />
                </DialogTitle>
                <DialogContent style={{ maxHeight: "300px", padding: "0px" }}> xcvbnm </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={(e)=>{p.open=false}} className={p.classes.ind}>
                        Cancel
                    </Button>
                    <Button color="secondary" variant="contained" className={p.classes.ind}>
                        Select Products
                </Button>
                </DialogActions>
            </Dialog >);
}));
