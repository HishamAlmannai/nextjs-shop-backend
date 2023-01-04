import { Card, Button, Grid, TextField, CardContent } from "@mui/material";
import { useRouter } from "next/router";

import { useState } from "react";

export default function CategoryCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    const nameValue = event.target.elements.name.value;
    const descriptionValue = event.target.elements.description.value;

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());
    router.push("/categories");
  };
  return (
    
      <Card sx={{width: 1/2}}>
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
