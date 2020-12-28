// FILEPATH: src/pages/streamer/comp-streamerTableRow.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

let style = theme => ({});

export interface IStreamerTableRowProp {
    classes: any;
    streamer: string; 
    contentType: string; 
    availableTo: string; 
    snapshot: string;
    rating: string;
    isViewDetailsDisabled: boolean;
    viewDetailsOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StreamerTableRow = (p: IStreamerTableRowProp) => {
    return (
        <TableRow>
            <TableCell>{p.streamer}</TableCell>
            <TableCell>{p.contentType}</TableCell>
            <TableCell>{p.availableTo}</TableCell>
            <TableCell><img src={p.snapshot}/></TableCell> 
            <TableCell>{p.rating}</TableCell>

            <TableCell>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={p.isViewDetailsDisabled}
                    size="small"
                    onClick={(e)=>{window.location.href="#/App/StreamerView/"+p.streamer}}
                >
                    View Details and Stream
                </Button>
            </TableCell>

        </TableRow>
    );
};

export default withStyles(style)(observer(StreamerTableRow));
