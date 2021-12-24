import styled from "styled-components";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
const Nav = styled.nav`
  height: 80px;
  background: black;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  /* display: inline-block; */
  box-sizing: border-box;
  overflow: hidden;

  /* @media screen and (max-width: 690px) {
    height: 120px;

    width: 35.5rem;
  } */
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const style = { color: "white", fontSize: "1em", padding: 2, width: 20 };

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
          <StyledLink>Contact</StyledLink>
        </Link>

        <Link href="/" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/cart" passHref>
          <StyledLink>
            Cart
            <FaShoppingCart style={style} />
          </StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
