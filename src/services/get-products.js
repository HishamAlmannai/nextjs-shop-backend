import { dbConnect } from "../lib/database";
import Category from "../models/Category";
import Product from "../models/Product";

export const getProducts = async () => {
  await dbConnect();
  const data = await Product.find().populate("category");

  return data.map(({ id, name, description, tags, price, category }) => ({
    id,
    name,
    description,
    tags,
    price,
    category: category.name,
  }));
};
