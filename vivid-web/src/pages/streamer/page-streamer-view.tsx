// FILEPATH: src/pages/streamer/page-streamer-view.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import StreamerHeaderTableRow from './comp-streamerHeaderTableRow';
import {IStreamerHeaderTableRowProp} from './comp-streamerHeaderTableRow';
import StreamerItemTableRow from './comp-streamerItemTableRow';
import {IStreamerItemTableRowProp} from './comp-streamerItemTableRow';

let style = theme => ({});

export interface IStreamerViewPageProp {
    classes: any;
    hasError: boolean;
    isLoading: boolean;
    streamerHeader: IStreamerHeaderTableRowProp;
    streamerItems: Array<IStreamerItemTableRowProp>;
    canConnect: boolean;
    error: string;
    changePerPage: (perPage: number) => void;
    tableRowsPerPage: number;
    tablePageNumber: number;
    tableTotalRows: number;
    tableOnChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
    tableOnChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textSearch: () => void;
    viewButtonChangePage: () => void;
}

const StreamerViewPage:React.FunctionComponent<IStreamerViewPageProp> = (p) => {
    return (
        <div>
            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h5">STREAMER DETAILS</Typography>
                    </div>
                    <div style={{ flex: 1, textAlign: "right" }}>
                        {p.isLoading ? <CircularProgress /> : null}
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>

                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Streamer Details</Typography>
                    </div>
                </div>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Streamer</TableCell>
                            <TableCell>Blah</TableCell>
                            <TableCell>Blah</TableCell>
                            <TableCell>Blah</TableCell>
                            <TableCell>Blah</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {p.streamerHeader ?
                            <StreamerHeaderTableRow 
                                streamerID={p.streamerHeader.streamerID}
                                streamerNumber = {p.streamerHeader.streamerNumber}
                                madeFor={p.streamerHeader.madeFor}
                                dueDate={p.streamerHeader.dueDate}
                                status={p.streamerHeader.status}
                            />
                        : null}

                        {!p.canConnect ? <TableRow>
                            <TableCell colSpan={7} align="center">
                                Unable to view streamer - please try again later.
                        </TableCell>
                        </TableRow> : null}

                    </TableBody>
                </Table>
            </Paper>

            <Paper style={{ padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <Select />
                    </div>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <Select />
                    </div>
                    <div style={{ flex: 1, marginLeft: "10px" }}>
                        <Select />
                    </div>
                    <div style={{ flex: 1, marginLeft: "10px" }}>
                        <Select />
                    </div>
                    <div style={{ flex: 2, marginLeft: "10px" }}>
                        <TextField onChange={p.textSearch} />
                    </div>
                </div>
            </Paper>

            <Paper style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div style={{ flex: 5 }}>
                        <Typography variant="h6">Stream</Typography>
                    </div>
                </div>
                <Table size="small">
                    <TableHead>
                        <TableRow>

                            <TableCell>Video</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Pay</TableCell>
                            <TableCell>Donate</TableCell>
                            <TableCell>Video Description</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>

                            <TableCell><img src="/th.gif"/></TableCell>
                            <TableCell>0.01R</TableCell>
                            <TableCell>If you want</TableCell>
                            <TableCell>Yes please</TableCell>
                            <TableCell>A cool stream of traffic?</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    disabled={false}
                                    size="small"
                                    onClick={(e)=>{}}
                                >
                                    MicroPay
                                </Button>
                            </TableCell>
                        </TableRow>
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
    )
};

export default withStyles(style)(observer(StreamerViewPage));
