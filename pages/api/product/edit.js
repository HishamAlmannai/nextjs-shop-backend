import Product from "../../../src/models/Product";
import { dbConnect } from "../../../src/lib/database";

export default async function handler(request, response) {
  if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    await dbConnect();

    const product = await Product.findByIdAndUpdate(data.id, {
      name: data.name,
      description: data.description,
      tags: data.tags,
      price: data.price,
      category: data.category,
    });

    response.status(200).json({
      message: "Category edited",
      Category: category,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
