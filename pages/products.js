import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import { getProducts } from "../src/services/get-products";
import swrFetcher from "../src/lib/swr-fetcher";
import ProductList from "../src/components/ProductList";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      fallback: {
        "/api/products": products,
      },
    },
  };
}

export default function Products({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1" hidden>Produkte</Typography>
      <ProductList />
    </SWRConfig>
  );
}
