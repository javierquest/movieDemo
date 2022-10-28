import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import MovieDetailsPageComp from 'components/MovieDetailsPage/MovieDetailsPage';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Movie Details Page</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <MovieDetailsPageComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
