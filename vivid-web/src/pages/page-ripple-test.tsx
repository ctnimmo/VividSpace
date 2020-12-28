// FILEPATH: src/pages/page-ripple-test.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as ripple from "../services/ripple_v2/ripple-latest";

const styles = theme => ({});

export interface IServer_info {
    buildVersion: any;
    // completeLedgers: any;
    // hostID: any;
}

export class Server_info {
    buildVersion: any;
    // completeLedgers: any;
    // hostID: any;
}

export interface IRippleTestPageProp {
    classes: any;
    server_info: any;
}

const RippleTestPage = (p: IRippleTestPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">About</Typography>
                        <Typography variant="caption"></Typography>
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 1 }}>
                        This is Vivid, a Live Stream Request Service, where you get paid by users for your live streams.
						<p>Connected to rippled server!</p>

                        <table>
                            <tr><th>Version</th>
                                <td> {p.server_info} </td></tr>
                            <tr><th>Ledgers available</th>
                                <td> </td></tr>
                            <tr><th>hostID</th>
                                <td></td></tr>

                        </table>

                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(observer(RippleTestPage));

function ripFun () {
    var ddd = new ripple.ripple.RippleAPI({ server: 'wss://s1.ripple.com/' });
    // var api = new ripple.RippleAPI({ server: 'wss://s1.ripple.com/' });
}
