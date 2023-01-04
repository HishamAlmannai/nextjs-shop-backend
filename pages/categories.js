import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import { getCategories } from "../src/services/get-categories";
import swrFetcher from "../src/lib/swr-fetcher";
import CategoryList from "../src/components/CategoryList";

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1">Kategorien</Typography>
      <CategoryList />
    </SWRConfig>
  );
}
