import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
    borderLeft: '8px solid #8c1515',
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  icon: { fontSize: theme.spacing(2), color: '#8c1515' },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    color: '#8c1515',
  },
  message: { fontSize: '0.75rem', color: '#858585' },
}));

const OptionalConfigWarning = ({ control, setValue }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <ErrorIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              Please Note
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={classes.message}>
          You must press "Enter" to apply your configuration
          parameters.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OptionalConfigWarning;
