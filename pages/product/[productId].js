import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>hello this is product page{productId}</div>;
};
export default ProductPage;
