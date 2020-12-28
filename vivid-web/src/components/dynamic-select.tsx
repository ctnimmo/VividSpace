import * as React from 'react';
import { Paper, Chip, Typography, Table, TableCell, TableHead, TableRow, TableBody, Button, Select, MenuItem, Input, InputLabel, CircularProgress, FormControl, withStyles } from '@material-ui/core';

export interface DynamicSelectProps {
    name: string;
    value: any;
    label: string
    onChange(field: string, value: string)
    data: Array<DisplayableData>;
    loading: boolean;
    placeholder?: string;
    idFieldName?: string;
    error: boolean;
    disabled: boolean
    extraOptions?: Array<DisplayableData>
    filter?: (item: any) => boolean;
}

export interface DisplayableData {
    name: string;
}

const DynamicSelect = ({ name, value, label, onChange, data, loading, placeholder, idFieldName, error, disabled, extraOptions, filter }: DynamicSelectProps) => {
    if (extraOptions == undefined) {
        extraOptions = []
    }
    let idField = "id"
    if (idFieldName != undefined && idFieldName.length > 0) {
        idField = idFieldName;
    }
    let filteredData = data;
    if (filter) {
        filteredData = data.filter(filter)
    }
    return <FormControl error={error} fullWidth>
        <InputLabel htmlFor={name + "-dynamic-select"}>{label}</InputLabel>
        <Select value={value} disabled={disabled} onChange={(e) => onChange(name, String(e.target.value))} inputProps={{ name: name, id: name + "-dynamic-select" }} placeholder={placeholder}>
            {loading ? <CircularProgress /> :
                filteredData.map((item, i) => (
                    <MenuItem key={i} value={item[idField]}>{item.name}</MenuItem>
                ))}
            {loading ? null :
                extraOptions.map((item, i) => (
                    <MenuItem key={i} value={item[idField]}>{item.name}</MenuItem>
                ))}
        </Select>
    </FormControl >
}


export default DynamicSelect;
