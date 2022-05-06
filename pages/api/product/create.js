import Product from "../../../src/models/Product";
import Category from "../../../src/models/Category";
import { dbConnect } from "../../../src/lib/database";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();

    let category = await Category.findOne({ name: data.name });

    if (!category) {
      category = await Category.create({
        name: data.name,
        description: data.description,
      });
    }

    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      tags: data.tags,
      price: data.price,
      category: data.category,
    });

    response.status(200).json({
      messssage: "Product created",
      Product: newProduct,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
