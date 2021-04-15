import * as React from 'react';
import { getList, createEntity, VIEWS } from '../../constants';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Loading from '../utils/Loader';
import { Button, capitalize } from '@material-ui/core';

const DATE = 'data';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function CreateView({ resource, setView }) {
    const classes = useStyles();
    const [keys, setKeys] = React.useState([]);
    const [sending, setSending] = React.useState(false);
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

    const submit = (e) => {
      e.preventDefault();
      const data = Array.from(e.target)
        .filter((el) => el.nodeName === 'INPUT')
        .reduce((acc, el) => ({ ...acc, [el.id]: el.value }), {});
      setSending(true);
      
      createEntity(resource, data)
        .then(({ success, error }) => {
          setSending(false);
          if (!success) {
            setError(error);
          } else {
            setView(VIEWS.LIST);
          }
        })
        .catch((e) => setError(String(e)));
    };

    if (error) return <div className="container">{error}</div>;
    if (!keys.length || sending) return <Loading />

    return (
       <Paper className={classes.root + ' row'} style={{justifyContent: 'center', marginTop: 20 }}>
         <div className="col-12">
          <form onSubmit={submit} className={classes.root + ' row px-4'} noValidate autoComplete="off">
            {keys.map((key, index) => (
                <TextField 
                  key={key}
                  id={key} 
                  className="col-11 col-md-5 mx-md-4" 
                  label={key !== DATE ? key : ''} 
                  type={key === DATE ? 'datetime-local' : 'text'}
                  style={index === keys.length - 1 && index % 2 === 0 ? { minWidth: '-webkit-fill-available', } : null}
                />
            ))}

            <div className="col-12">
              <Button variant="contained" color="primary" className="mt-3 pt-2" onClick={() => setView(VIEWS.LIST)}>Back to List</Button>
              <Button type="submit" variant="contained" color="primary" className="mt-3 ml-3 pt-2">Create New {capitalize(resource)}</Button>
            </div>
          </form>
         </div>
      </Paper>
    );
};