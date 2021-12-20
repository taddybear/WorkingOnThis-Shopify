import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "8686c2203ba5977665efe38123b1a4ca",
  domain: "cupoffthee.myshopify.com",
});

export default client;
