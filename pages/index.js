import * as React from 'react';
import FormBox from '../src/components/FormBox';
import Header from '../src/components/Header';
import { Container, Grid, Box } from '@mui/material';
import ImageHome from '../src/components/Images/ImageHome';
import Footer from '../src/components/Footer';
import Copyright from '../src/Copyright';

export default function Index() {
  return (<>
    <Header />
    <Container maxWidth="lg" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem',
    }}>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <ImageHome />
        </Grid>

        <Grid item xs={12} sm={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FormBox />
        </Grid>
      </Grid>
    </Container>
    <Footer />
    <Copyright />
  </>

  );
}
