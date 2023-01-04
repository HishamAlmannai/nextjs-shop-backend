import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import useSWR, { mutate } from "swr";

export default function Product({
  id,
  name,
  description,
  tags,
  price,
  category,
}) {
  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [tagsValue, setTagsValue] = useState(tags);
  const [priceValue, setPriceValue] = useState(price);
  const [editValue, setEditValue] = useState(false);
  const [categoryValue, setCategoryValue] = useState(category);

  const { data } = useSWR("/api/categories");

  const submit = async (event) => {
    event.preventDefault();
    if (editValue) {
      const response = await fetch("/api/product/edit", {
        method: "PUT",
        body: JSON.stringify({
          id,
          name: nameValue,
          description: descriptionValue,
          tags: tagsValue,
          price: priceValue,
          category: categoryValue,
        }),
      });
      mutate("/api/products");
      setEditValue(!editValue);
    } else {
      setEditValue(!editValue);
    }
  };

  return (
    <Card>
      <CardContent>
        {!editValue ? (
          <>
            <Typography>{name}</Typography>
            <Typography>{description}</Typography>
            <Typography>{tags}</Typography>
            <Typography>{price}</Typography>
            <Typography>{category}</Typography>
          </>
        ) : (
          <>
            <TextField
              name="name"
              label="name"
              required
              fullWidth
              sx={{ marginTop: 1.5 }}
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
            <TextField
              name="description"
              label="description"
              required
              fullWidth
              sx={{ marginTop: 1.5 }}
              value={descriptionValue}
              onChange={(event) => {
                setDescriptionValue(event.target.value);
              }}
            />
            <TextField
              name="tags"
              label="tags"
              required
              fullWidth
              sx={{ marginTop: 1.5 }}
              value={tagsValue}
              onChange={(event) => {
                setTagsValue(event.target.value);
              }}
            />
            <TextField
              name="price"
              label="price"
              required
              fullWidth
              sx={{ marginTop: 1.5 }}
              value={priceValue}
              onChange={(event) => {
                setPriceValue(event.target.value);
              }}
            />
            <p> {categoryValue.name}</p>
            <Select
              fullWidth
              sx={{ marginTop: 1.5 }}
              defaultValue={categoryValue}
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
          </>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" onClick={submit}>
          {!editValue ? "Edit" : "Save"}
        </Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
