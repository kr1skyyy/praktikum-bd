import * as React from 'react';
import Button from '@material-ui/core/Button';
import List from './resources/List';
import { capitalize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function ResourceView({ resource }) {
    const classes = useStyles();

    if (!resource) return <div className="container">{'<-- Please select a resource'}</div>

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">Create New {capitalize(resource)}</Button>
            <List resource={resource} />
        </div>

    );
};