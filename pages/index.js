// import styled from "styled-components";s
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Product4Box from "../components/Product4Box";
import React from "react";
import { useEffect, useState } from "react";
import client from "../Shopify/Shopify";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    /* it place the items in vertical direction */
    flex-direction: column;
  }
`;

const Column1 = styled.div`
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 70%; /* sets initial width to 70% */
  position: relative;
  top: -7rem;
  color: white;
  padding: 1rem;
`;

const Text123 = styled.div`
  position: absolute;
  bottom: -9rem;

  color: white;
`;
const Text1234 = styled.div`
  position: absolute;
  bottom: -11rem;
  color: white;
`;

const Box = styled.div`
  background: #fff;
  background-image: url("/af689587-900x900.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 0;
  border-radius: 12px;
  margin: 1rem;
`;

const BoxPic2 = styled.div`
  background: #fff;
  background-image: url("/1014ef99-900x900.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 0;
  border-radius: 12px;
  margin: 1rem;
`;

const DivOverall = styled.div`
  width: 550px;
  height: 500px;
`;

const Column2 = styled.div`
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 70%; /* sets initial width to 70% */
  position: relative;
  top: -7rem;
  color: white;
  padding: 1rem;
`;

const Button1 = styled.button`
  position: absolute;
  bottom: -12rem;
  /* color: white; */
`;

const Trending = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 0;
`;

const Find = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 3rem;
`;
const Section4Boxes = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Box1 = styled.div`
  background-image: url("home.png");
  width: 100%;
  height: 300px;
  /* background-color: blue; */
  padding: 10px;
  margin: 20px;
  box-sizing: border-box;
  font-size: 30px;
  flex-flow: wrap;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 92%;
  }
`;
const Box12 = styled.div`
  background-image: url("/af689587-900x900.jpeg");
  width: 100%;
  height: 300px;
  /* background-color: blue; */
  padding: 10px;
  margin: 20px;
  box-sizing: border-box;
  font-size: 30px;
  flex-flow: wrap;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 92%;
  }
`;

const Home = ({ products, collections }) => {
  const [newArrival, setNewArrival] = useState({});
  useEffect(() => {
    collections.forEach((collection) => {
      if (collection.title === "New Arrival") {
        setNewArrival(collection);
      }

      console.log({ products, collection });
    });
  }, []);

  const [whiteShoes, setWhiteShoes] = useState({});
  useEffect(() => {
    collections.forEach((collection) => {
      if (collection.title === "White Shoes") {
        setWhiteShoes(collection);
      }

      console.log({ products, collection });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <DivOverall>
          <Box>
            <Column1>
              <h1>New Items</h1>
              {/* <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and
              </p> */}
              <Text123>
                <p>This is for you</p>
              </Text123>
              <Link href={`/collection/${newArrival.handle}`}>
                <Button1>
                  {newArrival.products && newArrival.products.length}Items
                </Button1>
              </Link>
              <Text1234>
                <p>$200</p>
              </Text1234>
            </Column1>
          </Box>
        </DivOverall>
        <DivOverall>
          <BoxPic2>
            <Column2>
              <h1>Hot Items</h1>
              {/* <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and
            </p> */}
              <Text123>
                <p>This is for you</p>
              </Text123>
              <Link href={`/collection/${whiteShoes.handle}`}>
                <Button1>
                  {whiteShoes.products && whiteShoes.products.length}Items
                </Button1>
              </Link>
              <Text1234>
                <p>$200</p>
              </Text1234>
            </Column2>
          </BoxPic2>
        </DivOverall>
      </Container>
      <Trending>Tranding Now</Trending>
      <Find>Find the perfect peace or accessory to finish your outfit</Find>
      {/* {collections.map((collection, index) => {
        const product = collection.products;

        return (
          //   <Section4Boxes key={index}>
          //     <Link href={`/product/${product.handle}`}>
          //       <Box1>
          //         <h2></h2>
          //       </Box1>
          //     </Link>

          //     <Box1>
          //       <h2>hello</h2>
          //     </Box1>
          //     <Box1>
          //       <h2>hello</h2>
          //     </Box1>
              // <Link href="http://localhost:3000/collection/new-arrival">
              //   <Box1>
              //     <h2>hellojj</h2>
              //   </Box1>
              // </Link>
          //   </Section4Boxes>
          // );
          // return (
          <Section4Boxes key={index}>
            <Box1>
              <h2>hellojj</h2>
            </Box1>
          </Section4Boxes>
        );
      })} */}
      <Section4Boxes>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box12>
            <h2>hellojj</h2>
          </Box12>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
      </Section4Boxes>
      <Section4Boxes>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
        <Link href="http://localhost:3000/collection/new-arrival">
          <Box1>
            <h2>hellojj</h2>
          </Box1>
        </Link>
      </Section4Boxes>

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const products = await client.product.fetchAll();
  const collections = await client.collection.fetchAllWithProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      collections: JSON.parse(JSON.stringify(collections)),
    },
  };
}

export default Home;
