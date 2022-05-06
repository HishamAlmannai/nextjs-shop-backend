import Category from "../../../src/models/Category";
import { dbConnect } from "../../../src/lib/database";

export default async function handler(request, response) {
  if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    await dbConnect();

    let category = await Category.findOne({ name: data.name });

    if (!category) {
      category = await Category.findByIdAndUpdate(data.id, {
        name: data.name,
        description: data.description,
      });
    }

    response.status(200).json({
      message: "Category edited",
      Category: category,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
