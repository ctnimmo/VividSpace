// FILEPATH: src/pages/streamer/comp-streamerHeaderTableRow.tsx

import * as React from "react";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

let style = theme => ({});

export interface IStreamerHeaderTableRowProp {
    classes:any;
    streamerID: string;
    streamerNumber: string;
    madeFor: string;
    dueDate: string;
    status: string;
}

const StreamerHeaderTableRow = (p: IStreamerHeaderTableRowProp) => {
    return (
        <TableRow>
            <TableCell>{p.streamerID}</TableCell>
            <TableCell>{p.streamerNumber}</TableCell>
            <TableCell>{p.madeFor}</TableCell>
            <TableCell>{p.dueDate}</TableCell> 
            <TableCell>{p.status}</TableCell>
        </TableRow>
    );
};

export default withStyles(style)(observer(StreamerHeaderTableRow));
