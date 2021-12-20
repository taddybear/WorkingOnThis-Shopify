import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  //   return <div>hello this is product page{productId}</div>;

  return (
    <div>
      <Navbar />
      <div>hello this is product page{productId}</div>
      <Footer />
    </div>
  );
};
export default ProductPage;
