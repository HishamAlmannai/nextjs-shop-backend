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

    response.status(200).json({
      message: "Category created",
      Category: category,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
