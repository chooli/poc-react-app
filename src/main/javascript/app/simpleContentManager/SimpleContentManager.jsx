import React, {useState} from 'react';
import {
  Grid,
  Paper,
  withStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Fab,
} from '@material-ui/core';
import {Add, Navigation, Edit} from '@material-ui/icons';

const style = (theme) => ({
  main: {
    margin: '0px 0px',
  },
  sideBar: {
    margin: '0px 0px',
    padding: '13px 9px',
    width: '86px',
  },
  item: {
    height: '30px',
  },
});

const members = ['Lynn', 'Chooli', 'James'];

const MenuItem = ({classes, member}) => {
  return (
    <ListItem selected={true} classes={classes.item}>
      <ListItemText
        primary={member}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <Edit/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const SimpleContentManager = ({classes}) => {
  const [dense, updateDense] = useState(false);

  return (
    <Grid container spacing={0}>
      <Grid item sm={3} className={classes.sideBar}>
        <Fab variant="extended"
          size="small"
          color="primary"
          aria-label="Add">
          <Add/>
                  Add new member
        </Fab>
      </Grid>
      <Grid item sm={9} className={classes.main}>
        <Paper square>
          <List dense={dense}>
            {
              members.map( (member) =>
                <MenuItem
                  member={member}
                  classes={classes}
                />)
            }
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(SimpleContentManager);
