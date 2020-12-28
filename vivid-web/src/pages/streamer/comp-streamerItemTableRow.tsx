// FILEPATH: src/pages/streamer/comp-streamerItemTableRow.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

let style = theme => ({});

export interface IStreamerItemTableRowProp {
    classes: any;
    streamerID: string;
    steamerRef: string;
    isLoading: boolean;
    viewButtonChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StreamerItemTableRow = (p: IStreamerItemTableRowProp) => {
    return (
        <TableRow>                                
            <TableCell>{p.streamerID}</TableCell>
            <TableCell>{p.steamerRef}</TableCell>
            <TableCell>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={p.isLoading}
                    size="small"
                    onClick={p.viewButtonChangePage}
                >
                    View Label
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default withStyles(style)(observer(StreamerItemTableRow));
