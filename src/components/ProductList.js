import { Grid } from "@mui/material";
import useSWR from "swr";
import Product from "./Product";

export default function ProductList() {
  const { data } = useSWR("/api/products");
  return (
    <Grid container spacing={4}>
      {data.map((product) => (
        <Grid item xs={4} key={product.id}>
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            tags={product.tags}
            price={product.price}
            category={product.category}
          />
        </Grid>
      ))}
    </Grid>
  );
}
