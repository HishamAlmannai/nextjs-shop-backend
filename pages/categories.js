import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import { getCategories } from "../src/services/get-categories";
import swrFetcher from "../src/lib/swr-fetcher";

export function getStaticProps() {
  const categories = getCategories();
  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function Categories() {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Typography variant="h1">Kategorien</Typography>
    </SWRConfig>
  );
}
