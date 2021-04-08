import * as React from 'react';
import Button from '@material-ui/core/Button';
import List from './resources/List';
import { capitalize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VIEWS } from '../constants';
import CreateView from './resources/Create';
import EditView from './resources/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function ResourceView({ resource, view, setView }) {
    const classes = useStyles();
    const [entity, setEntity] = React.useState({});

    React.useEffect(() => {
      setView(VIEWS.LIST);
    }, [resource, setView]);

    if (!resource) return <div className="container">{'<-- Please select database'}</div>

    if (view === VIEWS.LIST) return (
        <div className={classes.root}>
            <Button onClick={() => setView(VIEWS.CREATE)} variant="contained" color="primary">Create New {capitalize(resource)}</Button>
            <List resource={resource} setView={setView} setEntity={setEntity} />
        </div>
    );

    if (view === VIEWS.CREATE) return (
      <CreateView resource={resource} setView={setView} />
    );

    if (view === VIEWS.EDIT) return (
      <EditView resource={resource} setView={setView} entity={entity} />
    );

    return <div>Unknown ResourceView {view}</div>
};