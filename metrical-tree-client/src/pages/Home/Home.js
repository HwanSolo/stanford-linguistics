import React from 'react';
import { useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Link } from '@material-ui/core';

import IdentityBar from 'components/IdentityBar';
import PrimaryFooter from 'components/PrimaryFooter';
import SecondaryFooter from 'components/SecondaryFooter';
import Appbar from 'components/Appbar';
import background from 'assets/images/homepageBg.jpg';
import StyledButtonPrimary from 'components/shared/ButtonPrimary/ButtonPrimary';

const useStyles = makeStyles((theme) => ({
  mainWrapper: { height: '100vh' },
  container: {
    height: 'calc(100vh - 320px)',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 405px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  card: {
    padding: 32,
    borderRadius: 0,
    margin: theme.spacing(4, 2),
    [theme.breakpoints.down('xs')]: {
      padding: 16,
    },
  },
  subtitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.75rem',
    marginBottom: 16,
    marginTop: -8,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
    },
  },
  link: {
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,
    },
  },
  linkLabel: {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.mainWrapper}>
      <IdentityBar />
      <Appbar />
      <Grid
        container
        justifyContent="flex-start"
        alignContent="center"
        className={classes.container}>
        <Grid item xs={1} sm={1} md={1} lg={2}></Grid>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          <Card className={classes.card}>
            <Typography className={classes.subtitle}>
              MetricalTree
            </Typography>
            <Typography className={classes.title}>
              English Sentence Stress
            </Typography>
            <Typography>
              MetricalTree generates a normal stress contour for
              English sentences. You can type in your own text from
              the keyboard or upload a text file.
            </Typography>
            <Link
              className={classes.link}
              onClick={() => history.push('/about')}>
              <Grid container>
                <Grid item>
                  <Typography className={classes.linkLabel}>
                    Learn More
                  </Typography>
                </Grid>
                <Grid item>
                  <KeyboardArrowRightIcon />
                </Grid>
              </Grid>
            </Link>
            <Grid container justifyContent="flex-end">
              <StyledButtonPrimary
                label={'Compute'}
                onClick={() => history.push('/compute')}
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <SecondaryFooter />
      <PrimaryFooter />
    </Grid>
  );
};

export default Home;
