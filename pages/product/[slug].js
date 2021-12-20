import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import client from "../../Shopify/Shopify";
import Image from "next/image";

const TotalColum = styled.div`
  display: flex;
  padding: 10px;
  height: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  width: auto;
  height: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: 400px;
  }
`;
const LeftSmall = styled.div`
  display: flex;
  width: 25rem;
  padding: 10px;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 25rem;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
`;

const OverRoll = styled.div`
  display: flex;
  width: 50%;

  padding: 10px 50px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 10px 10px;
  }
`;
const Right = styled.div`
  padding: 10px 50px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 10px 10px;
  }
`;
const PrDescription = styled.div``;
const Price = styled.div``;
const Button = styled.button``;

const ProductPage = ({ product }) => {
  console.log({ product });
  //   return <div>hello this is product page{productId}</div>;
  const variant = product.variants[0];
  return (
    <div>
      <Navbar />

      {/* <div>hello this is product page{productId}</div> */}
      <TotalColum>
        <Left>
          <Image
            width="400"
            height="400"
            fill="responsive"
            src={product.images[0].src}
          />
        </Left>
        <OverRoll>
          <Right>
            {product.title}
            <br />
            <br />

            <PrDescription>{product.description}</PrDescription>
            <br />
            <Price>
              {variant.priceV2.currencyCode} {variant.priceV2.amount}
            </Price>
            <Button>Buy Now</Button>
          </Right>
        </OverRoll>
      </TotalColum>
      <LeftSmall>
        <Image
          width="100"
          height="100"
          fill="responsive"
          src={product.images[1].src}
        />
        <Image
          width="100"
          height="100"
          fill="responsive"
          src={product.images[0].src}
        />
        <Image
          width="100"
          height="100"
          fill="responsive"
          src={product.images[0].src}
        />
      </LeftSmall>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const product = await client.product.fetchByHandle(slug);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default ProductPage;
