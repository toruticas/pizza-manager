import styled, { createGlobalStyle } from 'styled-components';
import { Suspense, FC } from 'react';
import { Grommet, Grid, Box } from 'grommet';

import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

const Gradient = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: linear-gradient(#1d355b, #0a1321);
  height: 800px;
  width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#FBFEFF;
  }
`;

const MainWrapper = styled.div`
  position: relative;
`;

const Layout: FC = ({ children }) => (
  <Grommet full theme={{ global: { font: { family: 'sans-serif' } } }}>
    <GlobalStyle />
    <MainWrapper>
      <Gradient />
      <Grid
        fill
        rows={['auto', 'auto']}
        columns={['auto', 'flex']}
        gap='small'
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
        pad={{
          top: 'xsmall',
          right: 'xlarge',
          left: 'xlarge',
          bottom: 'xlarge',
        }}
      >
        <Header />
        <Sidebar />
        <Box gridArea='main' background='light-2'>
          <Suspense fallback={<p>loading...</p>}>{children}</Suspense>
        </Box>
      </Grid>
    </MainWrapper>
  </Grommet>
);

export { Layout };
