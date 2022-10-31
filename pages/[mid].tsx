import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import MovieDetailsPageComp from 'components/MovieDetailsPage/MovieDetailsPage';
import questTheme from 'MyDesignSystemLightTheme';
import Head from 'next/head';
import type { NextPage } from 'next';

const MovieIndex: NextPage = () => {
return (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={questTheme}>
      <div>
        <Head>
          <title>Movie Details Page</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <MovieDetailsPageComp isLoading />
        </main>
      </div>
    </ThemeProvider>
  </StyledEngineProvider>
);
};


export default MovieIndex;