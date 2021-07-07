import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Link } from '@material-ui/core';

import IdentityBar from '../../components/IdentityBar';
import PrimaryFooter from '../../components/PrimaryFooter';
import SecondaryFooter from '../../components/SecondaryFooter';
import Appbar from '../../components/Appbar';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
    padding: 16,
    backgroundColor: '#f2f2f2',
    minHeight: 'calc(100vh - 236px)',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 322px)',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 'calc(100vh - 360px)',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: '1.25rem',
  },
  subTitle: { fontSize: '0.625rem', marginBottom: -4 },
  button: {
    margin: '24px 0',
    borderRadius: 32,
    backgroundColor: '#44AB77',
    '&:hover': {
      backgroundColor: '#3C8F65',
      textDecoration: 'underline',
      color: 'white',
    },
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '0.625rem',
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: '0.75rem',
  },
  sectionText: { fontSize: '0.75rem', marginTop: 8 },
  link: {
    color: '#44AB77',
    fontWeight: 'bold',
    '&:hover': { cursor: 'pointer', color: '#44AB77' },
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <IdentityBar />
      <Appbar />
      <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.container}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography className={classes.subTitle}>
            Metrical Tree
          </Typography>
          <Typography className={classes.title}>About</Typography>
          <Typography className={classes.sectionText}>
            MetricalTree generates a normal stress contour for English
            sentences.
          </Typography>
          <Typography className={classes.sectionText}>
            You can type in your own text from the keyboard or upload
            a text file.
          </Typography>
          <Typography className={classes.sectionText}>
            Normal stress means a baseline stress that depends on the
            syntactic and phonological structure of the sentence.
            MetricalTree builds on the classical SPE theory (Chomsky,
            Halle, and Lukoff 1956; Chomsky and Halle 1968; Liberman
            and Prince 1977; Cinque 1993). It uses syntactic parse
            trees provided by the Stanford Parser (Klein and Manning
            2003; Chen and Manning 2014; Manning et al. 2014). The
            source code for MetricalTree is available at{' '}
            <Link
              onClick={() => console.log('handle go to link')}
              className={classes.link}>
              https://github.com/tdozat/Metrics.
            </Link>
          </Typography>
          <Typography className={classes.sectionTitle}>
            FINE-TUNING
          </Typography>
          <Typography className={classes.sectionText}>
            Function words are a major puzzle. It is not clear whether
            small words like "a", "all", "in", "is", "not", "that",
            "the", "this", "will", "you", etc., are stressable or not.
            Whatever you decide will have a huge impact on the
            calculation of normal stress in virtually every sentence.
          </Typography>
          <Typography className={classes.sectionText}>
            MetricalTree solves the problem as follows:
          </Typography>
          <Typography className={classes.sectionText}>
            (a) By default, all words are stressed.
          </Typography>
          <Typography className={classes.sectionText}>
            (b) You can manually define words, or classes of words, as
            unstressable or stress-ambiguous.
          </Typography>
          <Typography className={classes.sectionText}>
            For more information, see Anttila, Dozat, Galbraith, and
            Shapiro 2020.
          </Typography>
          <Typography className={classes.sectionTitle}>
            STRESS MODELS
          </Typography>
          <Typography className={classes.sectionText}>
            MetricalTree produces four different stress models:
          </Typography>
          <Typography className={classes.sectionText}>
            Model 1: Ambiguous words are stressed. Model 2: Ambiguous
            monosyllables are unstressed, polysyllables stressed.
            Model 3: Ambiguous words are unstressed. Model 4: Ensemble
            model that takes the mean of the three prior models.
          </Typography>
          <Typography className={classes.sectionText}>
            If in doubt, start with Model 2.
          </Typography>
          <Typography className={classes.sectionTitle}>
            CITATION
          </Typography>
          <Typography className={classes.sectionText}>
            If you use MetricalTree you can cite the following
            article:
          </Typography>
          <Typography className={classes.sectionText}>
            Anttila, Arto, Timothy Dozat, Daniel Galbraith, and Naomi
            Shapiro. 2020. Sentence stress in presidential speeches.
            In Gerrit Kentner and Joost Kremers (eds.), Prosody in
            Syntactic Encoding, Walter De Gruyter: Berlin/Boston, pp.
            17-50.
          </Typography>
          {/* TODO: Clarify what this is - from the email */}
          {/* <Typography className={classes.sectionTitle}>
            EOF
          </Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Button
                size="small"
                variant="contained"
                className={classes.button}
                onClick={() => history.push('/')}>
                <Typography className={classes.buttonLabel}>
                  Home
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SecondaryFooter />
      <PrimaryFooter />
    </>
  );
};

export default AboutPage;