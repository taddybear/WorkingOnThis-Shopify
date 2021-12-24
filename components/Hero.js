import styled from "styled-components";

const Hero1 = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-image: url("home.png");
  z-index: 9999;
  width: 100%;
  list-style: none;
  /* display: inline-block; */
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 790px) {
    height: 1100px;

    width: 100%;
  }
`;

const Heading = styled.div`
  color: white;
  font-size: 10rem;
  font-weight: 900;
  /* width: 100%; */
`;

const Hero = () => {
  return (
    <>
      <Hero1>
        <Heading>Next</Heading>
      </Hero1>
    </>
  );
};

export default Hero;
