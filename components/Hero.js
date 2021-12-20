import styled from "styled-components";
// import { useEffect, useState } from "react";
// import client from "../Shopify/Shopify";

const Hero1 = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-image: url("home.png");
  z-index: 9999;
`;

const Heading = styled.div`
  color: white;
  font-size: 10rem;
  font-weight: 900;
`;

// const ContentBox = styled.div`
//   display: flex;
//   gap: 0.25rem;
//   padding: 0.25rem;
//   height: 100%;
//   align-items: center;
//   grid-area: content;
//   justify-content: center;
//   @media (max-width: 550px) {
//     flex-direction: column;
//   }
// `;
// const Content1 = styled.div`
//   width: 100vw;
//   height: 45vw;
//   display: flex;
//   background-color: white;

//   justify-content: center;
//   position: relative;
//   color: black;

//   @media only Screen and (max-width: 48em) {
//     height: 70vw;
//     display: block;
//   }
// `;

// const Content2 = styled.div`
//   background-image: url("home.png");
//   width: 100vw;
//   height: 45vw;

//   display: flex;
//   justify-content: center;
//   position: relative;
//   @media only Screen and (max-width: 48em) {
//     height: 70vw;
//     display: block;
//   }
// `;

// const Help = styled.div`
//   position: absolute;
//   left: 0;
// `;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   color: black;
//   background: white;
//   position: absolute;
//   bottom: 3rem;
//   font-size: 2em;
//   border-radius: 3px;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   display: flex;
//   @media only screen and (max-width: 900px) {
//     /* it place the items in vertical direction */
//     flex-direction: column;
//   }
// `;

// const Column1 = styled.div`
//   flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
//   flex-basis: 70%; /* sets initial width to 70% */
//   position: relative;
//   top: -10rem;
//   color: white;
//   padding: 1rem;
// `;

// const Text123 = styled.div`
//   position: absolute;
//   bottom: -16rem;

//   color: white;
// `;
// const Text1234 = styled.div`
//   position: absolute;
//   bottom: -20rem;
//   color: white;
// `;

// const Box = styled.div`
//   background: #fff;
//   background-image: url("home.png");
//   padding: 150px 0;
//   border-radius: 12px;
//   margin: 1rem;
// `;

// const Column2 = styled.div`
//   flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
//   flex-basis: 70%; /* sets initial width to 70% */
//   position: relative;
//   top: -10rem;
//   color: white;
//   padding: 1rem;
// `;

// const Button1 = styled.button`
//   position: absolute;
//   bottom: -17rem;
//   /* color: white; */
// `;

// const Home = () => {
// const Home1 = ({ products, collections }) => {
// const [newArrival, setNewArrival] = useState({});
// useEffect(() => {
//   collections.forEach((collection) => {
//     if (collection.title === "New Arrival") {
//       setNewArrival(collection);
//     }
//   });
// }, []);
// console.log({ products, collections });
// console.log(newArrival);
const Hero = () => {
  return (
    <>
      <Hero1>
        <Heading>Next</Heading>
      </Hero1>

      {/* <Container>
        <Box>
          <Column1>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged
            </p>
            <Text123>
              <p>This is for you</p>
            </Text123>
            <Button1>Buy Now</Button1>
            <Text1234>
              <p>$200</p>
            </Text1234>
          </Column1>
        </Box>
        <Box>
          <Column2>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged
            </p>
            <Text123>
              <p>This is for you</p>
            </Text123>
            <Button1>
              {newArrival.products && newArrival.products.length}Items
            </Button1>
            <Text1234>
              <p>$200</p>
            </Text1234>
          </Column2>
        </Box>
      </Container> */}
    </>
  );
};

// export async function getServerSideProps(context) {
//   const products = await client.product.fetchAll();
//   const collections = await client.collection.fetchAllWithProducts();
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//       collections: JSON.parse(JSON.stringify(collections)),
//     },
//   };
// }

export default Hero;
