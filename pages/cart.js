import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import client from "../Shopify/Shopify";
import styled from "styled-components";

import { Typography, List } from "antd";
const { Paragraph, Title, Text } = Typography;

import React from "react";
const getDataFromStorage = (key) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(key));
};

const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  storage.setItem(key, JSON.stringify(data));
};

const ListItem = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Cart = () => {
  const [checkout, setCheckout] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = getDataFromStorage("checkout");
      setCheckout(checkout);
    }
  }, []);
  console.log(checkout);
  return (
    <div>
      <Navbar />
      <List
        itemLayout="horizontal"
        dataSource={(checkout && checkout.lineItems) || []}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <img
                  style={{ marginLeft: 50 }}
                  width={10}
                  src={item.variant.image.src}
                  width="50"
                  height="50"
                />
              }
              description={
                <ListItem>
                  <p>{item.title}</p>
                  <p style={{ marginRight: 50 }}>
                    {item.variant.price * item.quanitity}
                  </p>
                </ListItem>
              }
            />
          </List.Item>
        )}
      />
      {/* <a href={checkout.webUrl}>Proceed to checkout</a> */}
      hello
      <Footer />
    </div>
  );
};

export default Cart;
