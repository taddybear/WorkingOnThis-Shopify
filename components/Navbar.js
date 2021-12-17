import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
  height: 80px;
  background: black;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>Ryan</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>

        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
