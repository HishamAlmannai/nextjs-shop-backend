import { Grid } from "@mui/material";
import useSWR from "swr";
import Category from "./Category";

export default function CategoryList() {
  const { data } = useSWR("/api/categories");
  
  return (
    <Grid container spacing="4">
      {data.map((category) => (
        <Grid item sx="4" key={category.id}>
          <Category
            id={category.id}
            name={category.name}
            description={category.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
