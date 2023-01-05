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
  const [selected, setSelected] = useState(false);

  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <ToggleButtonGroup exclusive>
            <Link href="/products" passHref>
              <ToggleButton
                component="a"
                sx={{ color: "white" }}
                selected={selected}
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                Produkte
              </ToggleButton>
            </Link>
            <Link href="/categories" passHref>
              <ToggleButton component="a" sx={{ color: "white" }}>
                Kategorien
              </ToggleButton>
            </Link>
            <Link href="/create-product" passHref>
              <Button component="a" sx={{ color: "white" }}>
                Produkt hinzufügen
              </Button>
            </Link>
            <Link href="/create-category" passHref>
              <Button component="a" sx={{ color: "white" }}>
                Kategorie hinzufügen
              </Button>
            </Link>
          </ToggleButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
