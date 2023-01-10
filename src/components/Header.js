import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [selected, setSelected] = useState();

  const buttonStyling = {
    color: "white",
    border: "none",
    '&:target': 
    {color: "black"},
  };


  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/products" passHref>
            <Button component="a" sx={buttonStyling} value="products">
              Produkte
            </Button>
          </Link>
          <Link href="/categories" passHref>
            <Button component="a" sx={buttonStyling} value="categories">
              Kategorien
            </Button>
          </Link>
          <Link href="/create-product" passHref>
            <Button component="a" sx={buttonStyling} value="create-product">
              Produkt hinzufügen
            </Button>
          </Link>
          <Link href="/create-category" passHref>
            <Button component="a" sx={buttonStyling} value="create-category">
              Kategorie hinzufügen
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
