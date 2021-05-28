import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
  z-index: 2;
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const HeaderStyles = styled.header`
  .bar,
  .sub-bar {
    border-bottom: solid var(--black, black);
  }

  .bar {
    display: grid;
    align-items: center;
    border-bottom-width: 10px;
    justify-content: space-between;
    grid-template-columns: auto 1fr;
  }

  .sub-bar {
    display: grid;
    border-bottom-width: 1px;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
