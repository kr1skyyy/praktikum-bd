import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { RESOURCES, VIEWS } from '../constants';
import { capitalize } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
export default function TemporaryDrawer({ openDrawer, setOpenDrawer, setResource, setView }) {
    const classes = useStyles();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    const selectResource = (res) => {
        setResource(res);
        setView(VIEWS.LIST);
    }

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary="Databases" />
                        </ListItem>
                        <Divider />
                        {Object.values(RESOURCES).map((res, index) => (
                            <ListItem button onClick={() => selectResource(res)} key={res}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={capitalize(res)} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
}
