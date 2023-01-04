import {
  Card,
  CardContent,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

export default function ProductCreateForm({ categories: data }) {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const [priceValue, setPriceValue] = useState();
  const [categoryValue, setCategoryValue] = useState("");

  /*   
  const { data } = useSWR("/api/categories");
  console.log(data);
 */

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/product/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
        tags: tagsValue,
        price: priceValue,
        category: categoryValue,
      }),
    });
    console.log(await response.json());
    router.push("/products");
  };
  return (
    <Card sx={{ width: 1 / 2 }}>
      <CardContent>
        <form onSubmit={submit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="name"
                fullWidth
                sx={{ marginTop: 1.5 }}
                value={nameValue}
                onChange={(event) => {
                  setNameValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="description"
                fullWidth
                rows={2}
                value={descriptionValue}
                onChange={(event) => {
                  setDescriptionValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="tags"
                label="tags"
                fullWidth
                rows={2}
                value={tagsValue}
                onChange={(event) => {
                  setTagsValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="price"
                label="price"
                fullWidth
                rows={2}
                value={priceValue}
                onChange={(event) => {
                  setPriceValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={categoryValue}
                onChange={(event) => {
                  setCategoryValue(event.target.value);
                }}
              >
                {data.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
