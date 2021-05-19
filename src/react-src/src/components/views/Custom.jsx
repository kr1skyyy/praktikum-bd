import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCustom, VIEWS } from '../../constants';
import Loading from '../utils/Loader';
import { capitalize } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable(props) {
    const classes = useStyles();
    const [custom, setCustom] = React.useState(1);
    const [list, setList] = React.useState([]);
    const [error, setError] = React.useState();

    const selectEntity = (id) => {
        props.setEntity(list[id]);
        props.setView(VIEWS.EDIT);
    }

    React.useEffect(() => {
        getCustom(custom).then(setList)
            .catch(err => setError(String(err)));
    }, [custom]);

    if (error) return <div>{error}</div>;
    if (!list.length) return <Loading />;

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setCustom(Math.max(custom - 1, 1))}>Previous</Button>
            <Button variant="contained" color="primary" onClick={() => setCustom(Math.min(custom + 1, 3))}>Next</Button>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {Object.keys(list[0]).map((key, index) => (
                                <TableCell key={index}>{capitalize(key || '')}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((element, index) => (
                            <TableRow key={index}>
                                {Object.values(element).map((value, id) => (
                                    <TableCell key={value + id} component="th" scope="row" style={{ cursor: 'pointer' }} onClick={() => selectEntity(index)} >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
