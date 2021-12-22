import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import client from "../../Shopify/Shopify";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const Row = styled.div`
  display: flex;
  width: 70%;
  margin-top: 1rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 50%;
    padding: 10px 10px;
  }
`;

const Border = styled.div`
  display: flex;
  padding: 5px;
`;

const Plus = styled.div`
  font-size: 20px;
  width: 1.5rem;
  cursor: pointer;
  padding-top: 4px;
`;
const Minus = styled.div`
  font-size: 20px;
  padding-left: 10px;
  padding-top: 4px;
  cursor: pointer;
  width: 1.5rem;
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
const Price = styled.div`
  padding-top: 9rem;
`;

const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 7px 90px;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 10px 50px;
  }
`;
const Div1 = styled.input`
  height: 35px;
  width: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const parseData = (data) => {
  return JSON.parse(JSON.stringify(data));
};
const getDataFromStorage = (key) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(key));
};
const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  return JSON.parse(storage.setItem(key, JSON.stringify(data)));
};
const ProductPage = ({ product }) => {
  console.log({ product });
  // console.log({ checkout });
  const [amount, setAmount] = useState(1);
  const [checkout, setCheckout] = useState(null);
  const [checkoutAsItem, setCheckoutAsItem] = useState(false);
  const variant = product.variants[0];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempCheckout = getDataFromStorage("checkout");
      tempCheckout.lineItems &&
        tempCheckout.lineItems.forEach((lineItem) => {
          if (lineItem.title === product.title) {
            setAmount(lineItem.quantity);
          }
        });

      setCheckout(tempCheckout);
      console.log("this is useEffect log ==>", tempCheckout);
    }
  }, []);

  const addItemToCart = async () => {
    try {
      let checkoutTemp = null;
      if (getDataFromStorage("checkout")) {
        checkoutTemp = getDataFromStorage("checkout");
      } else {
        checkoutTemp = await client.checkout.create();
      }

      let checkout = parseData(checkoutTemp);
      const checkoutId = checkout.id;
      const lineItemsToAdd = [
        {
          variantId: variant.id,
          quantity: amount,
          customAttributes: [],
        },
      ];

      checkout = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
      console.log(parseData(checkout));
      setCheckout(parseData(checkout));
      setDataToStorage("checkout", checkout);
      setCheckoutAsItem(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCheckout = async () => {
    try {
      const [lineItem] = checkout.lineItems.filter(
        (lineItem) => lineItem.title === product.title
      );

      const checkoutId = checkout.id;
      const lineItemToUpdate = [
        {
          id: lineItem.id,
          quantity: amount,
        },
      ];

      console.log(lineItemToUpdate, checkoutId);
      const tempCheckout = await client.checkout.updateLineItems(
        checkoutId,
        lineItemToUpdate
      );
      console.log(parseData(tempCheckout));
    } catch (error) {
      console.log(error);
    }
  };
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
              {variant.priceV2.currencyCode} € {variant.priceV2.amount}
            </Price>
            <Row>
              <Border>
                <Plus onClick={() => setAmount(amount + 1)}>+</Plus>
                <Div1 value={amount} onChange={() => setAmount(amount + 1)} />
                <Minus onClick={() => setAmount(amount - 1)}>-</Minus>
              </Border>
              <Button
                onClick={!checkoutAsItem ? addItemToCart : updateCheckout}
              >
                Buy Now{" "}
              </Button>
            </Row>
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
  const checkout = await client.checkout.create();

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      checkout: JSON.parse(JSON.stringify(checkout)),
    },
  };
}

export default ProductPage;
