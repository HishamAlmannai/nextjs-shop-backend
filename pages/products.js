import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import { getProducts } from "../src/services/get-products";
import swrFetcher from "../src/lib/swr-fetcher";

export function getStaticProps() {
  const products = getProducts();
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
      <Typography variant="h1">Produkte</Typography>
      <Typography>{getStaticProps()}</Typography>
    </SWRConfig>
  );
}
