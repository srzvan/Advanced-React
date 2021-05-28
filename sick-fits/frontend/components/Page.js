import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  }

  :root {
    --gray: var(--grey);
    --max-width: 1000px;
    --grey: hsl(0, 0%, 23%);
    --red: hsl(0, 100%, 50%);
    --black: 	hsl(0, 0%, 22%);
    --off-white: hsl(0, 0%, 93%);
    --light-grey: hsl(0, 0%, 88%);
    --light-gray: var(--light-grey);
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: var(--max-width);
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
    </>
  );
}
