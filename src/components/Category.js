import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { mutate } from "swr";

export default function Category({ id, name, description }) {
  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [editValue, setEditValue] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    if (editValue) {
      const response = await fetch("/api/category/edit", {
        method: "PUT",
        body: JSON.stringify({
          id,
          name: nameValue,
          description: descriptionValue,
        }),
      });
      mutate("/api/categories");
      setEditValue(!editValue);
    } else {
      setEditValue(!editValue);
      console.log(editValue);
    }
  };

  return (
    <Card>
      <CardContent>
        {!editValue ? (
          <Typography variant="h5">{name}</Typography>
        ) : (
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
        )}
        {!editValue ? (
          <Typography variant="h5">{description}</Typography>
        ) : (
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
