import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getList } from '../../constants';
import Loading from '../utils/Loader';
import { capitalize } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [list, setList] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
      getList(props.resource).then(setList)
        .catch(err => setError(String(err)));
  }, [props.resource]);

  if (error) return <div>{error}</div>;
  if (!list.length) return <Loading />;

  return (
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
                <TableCell key={value + id} component="th" scope="row">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
