import * as React from 'react';
import { getList } from '../../constants';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Loading from '../utils/Loader';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function CreateView({ resource }) {
    const classes = useStyles();
    const [keys, setKeys] = React.useState([]);
    const [error, setError] = React.useState();

    React.useEffect(() => {
        getList(`${resource}`)
            .then((list) => {
                if (list.length) {
                    setKeys(Object.keys(list[0]));
                }
            })
            .catch((error) => {
                setError(String(error));
            });
    }, [resource]);

    if (error) return <div className="container">{error}</div>;
    if (!keys.length) return <Loading />

    return (
        <form className={classes.root} noValidate autoComplete="off">
            {keys.map((key) => (
                <TextField key={key} id="standard-basic" label={key} />
            ))}
        </form>
    );
};