import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-image: url("home.png");
`;

const Heading = styled.div`
  color: white;
  font-size: 10rem;
  font-weight: 900;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  height: 100%;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  width: 100vw;
  height: 45vw;
  display: flex;
  background-color: white;

  justify-content: center;
  position: relative;
  color: black;

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
`;

const Content2 = styled.div`
  background-image: url("home.png");
  width: 100vw;
  height: 45vw;

  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
`;

const Help = styled.div`
  position: absolute;
  left: 0;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  color: black;
  background: white;
  position: absolute;
  bottom: 3rem;
  font-size: 2em;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <>
      <Hero>
        <Heading>Next</Heading>
      </Hero>
      <ContentBox>
        <Content1>
          <Help>
            <h1>This is for you</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque faucibus, ante et consequat fermentum, diam mi
              molestie urna, eu mollis nibh neque quis ligula. Quisque lobortis
              arcu quis turpis mollis tristique. Suspendisse at vehicula lectus.
              Sed maximus feugiat mollis. Sed non elit a mauris commodo co
            </p>
            <p>
              {" "}
              <strong>Price</strong> $350
            </p>
          </Help>
        </Content1>
        <Content2>
          <div>
            <Button>Click Here</Button>
          </div>
        </Content2>
      </ContentBox>
    </>
  );
};

export default Home;
