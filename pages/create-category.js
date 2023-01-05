import { Typography } from "@mui/material";
import CategoryCreateForm from "../src/components/CategoryCreateForm";

export default function CreateCategories() {
  return (
    <>
      <Typography variant="h1" hidden>Kategorien hinzufügen</Typography>
      <CategoryCreateForm />
    </>
  );
}
