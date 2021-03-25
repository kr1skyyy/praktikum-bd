import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { RESOURCES } from '../constants';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ResourcePicker({ resource, setResource }) {
    const classes = useStyles();

    const handleChange = (event) => {
        setResource(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Select database</InputLabel>
            <Select
                value={resource}
                onChange={handleChange}
            >
                {Object.values(RESOURCES).map((rsrc) => (
                    <MenuItem key={rsrc} value={rsrc}>{rsrc}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
