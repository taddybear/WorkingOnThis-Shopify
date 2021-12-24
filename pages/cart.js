import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import { Typography, List } from "antd";
const { Paragraph, Title, Text } = Typography;
import React from "react";
import client from "../Shopify/Shopify";

const getDataFromStorage = (key) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(key));
};

const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  storage.setItem(key, JSON.stringify(data));
};
const parseData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

const Container = styled.div`
  margin-top: 50px;
`;

const ListItem = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Cart = () => {
  const [checkout, setCheckout] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = getDataFromStorage("checkout");
      if (checkout) {
        client.checkout.fetch(checkout.id).then((response) => {
          setCheckout(response);
        });
      }
    }
  }, []);
  const removeItemFromCart = async (check, item) => {
    const checkoutId = check.id;
    const lineItemIdsToRemove = [item.id];

    const checkout = await client.checkout.removeLineItems(
      checkoutId,
      lineItemIdsToRemove
    );
    setDataToStorage("checkout", checkout);
    setCheckout(parseData(checkout));
  };
  console.log(checkout);

  if (!checkout) {
    <div>
      return <Title level="1">Your Cart</Title>;
      <Paragraph>You don't have any items in your cart ):</Paragraph>;
    </div>;
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Title level="1">Your Cart</Title>
        <List
          itemLayout="horizontal"
          dataSource={(checkout && checkout.lineItems) || []}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    style={{ marginLeft: 50 }}
                    src={item.variant.image.src}
                    width="100"
                    height="75"
                  />
                }
                description={
                  <ListItem>
                    <p style={{ color: "black" }} level="5">
                      {item.title}
                    </p>
                    <p
                      style={{
                        marginRight: 50,
                        fontWeight: 600,
                        color: "black",
                      }}
                      level="5"
                    >
                      €{item.variant.price * item.quantity}
                      <FaTimesCircle
                        onClick={() => removeItemFromCart(checkout, item)}
                        style={{ marginLeft: 10, cursor: "pointer" }}
                      />
                    </p>
                  </ListItem>
                }
              />
            </List.Item>
          )}
        />
      </Container>
      <a href={checkout?.webUrl}>Proceed to checkout</a>

      <Footer />
    </div>
  );
};

export default Cart;
