// FILEPATH: src/pages/streamer/page-streamer-list.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import StreamerTableRow from './comp-streamerTableRow';
import {IStreamerTableRowProp} from './comp-streamerTableRow';

let style = theme => ({});

export interface IStreamerListPageProp {
    classes: any;
    hasError: boolean;
    isLoading: boolean;
    streamerSummaryList: Array<IStreamerTableRowProp>;
    canConnect: boolean;
    error: string;
    tableRowsPerPage: number;
    tablePageNumber: number;
    tableTotalRows: number;
    tableOnChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
    tableOnChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textSearch: () => void;
    viewButtonChangePage: () => void;
    viewStreamerDetails: (streamerNumber: string) => void;
}

const StreamerListPage = (p: IStreamerListPageProp) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Users</Typography>
                        <Typography variant="caption">Please select a user to view their stream.</Typography>
                    </div>
                    <div style={{ flex: 1, textAlign: "right" }}>
                        {p.isLoading ? <CircularProgress /> : null}
                    </div>
                </div>
            </Paper>

            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
					<Typography variant="caption">Content Search:</Typography>
                    <div style={{ flex: 1, marginLeft: "10px" }}>
                        <TextField onChange={p.textSearch} />
                    </div>
					<Typography variant="caption">Some other filter:</Typography>
					<div style={{ flex: 1, marginLeft: "10px" }}>
                        <Select />
                    </div>
                </div>
            </Paper>

            <Paper>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Steamer</TableCell>
                            <TableCell>Content Type</TableCell>
                            <TableCell>Available To</TableCell>
                            <TableCell>Snapshot</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {p.streamerSummaryList ? 
                            p.streamerSummaryList.map(
                                (s, idx) => 
                                <StreamerTableRow {...s} />
                                ) : null}
                        {p.canConnect && p.streamerSummaryList.length == 0 ? <TableRow>
                            <TableCell colSpan={7} align="center">
                                No Streamers available
                        </TableCell>
                        </TableRow> : null}

                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Page data (number x of y)</TableCell>

                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                rowsPerPage={p.tableRowsPerPage}
                                page={p.tablePageNumber}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'Rows per page' },
                                    native: true,
                                }}
                                count={p.tableTotalRows}
                                onChangePage={ p.tableOnChangePage }
                                onChangeRowsPerPage={ p.tableOnChangeRowsPerPage }
                            />

                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>

            <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={p.hasError}
            autoHideDuration={6000}
            onClose={() => p.error = ""}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{p.error}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => p.error = ""}
                >
                    <CloseIcon />
                </IconButton>
            ]} />
        </div>
    );
};

export default withStyles(style)(observer(StreamerListPage));
