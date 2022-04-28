import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/products" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Produkte
            </Button>
          </Link>
          <Link href="/categories" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Kategorien
            </Button>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
