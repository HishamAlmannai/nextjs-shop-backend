import {
  AppBar,
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [selectedProducts, setSelectedProducts] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(false);
  const [selectedCreateProduct, setSelectedCreateProduct] = useState(false);
  const [selectedCreateCategory, setSelectedCreateCategory] = useState(false);

 /*  if (selectedProducts===true) {
    setSelectedCategories(false);
    setSelectedCreateProduct(false);
    setSelectedCreateProduct(false);
  }
  else if (selectedCategories===true) {
    setSelectedProducts(false);
    setSelectedCreateProduct(false);
    setSelectedCreateProduct(false);
  }
  else if (selectedCreateProduct===true) {
    setSelectedCategories(false);
    setSelectedProducts(false);
    setSelectedCreateProduct(false);
  }
  else if (selectedCreateProduct===true) {
    setSelectedCategories(false);
    setSelectedCreateProduct(false);
    setSelectedProducts(false);
  }; */

  const buttonStyling = {
    color: "white",
    border: "none",
  };

  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <ToggleButtonGroup exclusive>
            <Link href="/products" passHref>
              <ToggleButton
                component="a"
                sx={buttonStyling}
                selected={selectedProducts}
                onClick={() => {
                  setSelectedProducts(!selectedProducts);
                }}
              >
                Produkte
              </ToggleButton>
            </Link>
            <Link href="/categories" passHref>
              <ToggleButton
                component="a"
                sx={buttonStyling}
                selected={selectedCategories}
                onClick={() => {
                  setSelectedCategories(!selectedCategories);
                }}
              >
                Kategorien
              </ToggleButton>
            </Link>
            <Link href="/create-product" passHref>
              <ToggleButton
                component="a"
                sx={buttonStyling}
                selected={selectedCreateProduct}
                onClick={() => {
                  setSelectedCreateProduct(!selectedCreateProduct);
                }}
              >
                Produkt hinzufügen
              </ToggleButton>
            </Link>
            <Link href="/create-category" passHref>
              <ToggleButton
                component="a"
                sx={buttonStyling}
                selected={selectedCreateCategory}
                onClick={() => {
                  setSelectedCreateCategory(!selectedCreateCategory);
                }}
              >
                Kategorie hinzufügen
              </ToggleButton>
            </Link>
          </ToggleButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
