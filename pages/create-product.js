import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import ProductCreateForm from "../src/components/ProductCreateForm";
import { getCategories } from "../src/services/get-categories";
import swrFetcher from "../src/lib/swr-fetcher";

export async function getServerSideProps() {
  const categories = await getCategories();
  return {
    props: {
      categories,
      /*  fallback: {
        "/api/categories": categories,
      }, */
    },
  };
}

export default function CreateProduct({ categories }) {
  return (
    <>
      <Typography variant="h1">Produkt hinzufügen</Typography>
      <ProductCreateForm categories={categories} />
    </>
  );
}
