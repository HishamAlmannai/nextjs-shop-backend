import { getProducts } from "../../src/services/get-products";

export default function handler(req, res) {
  const products = getProducts();
  console.log(products);
  res.status(200).json(products);
}
