import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Product({
  id,
  name,
  description,
  tags,
  price,
  category,
}) {
  /*

  tags.map((tag) => console.log(tag));
 <div>
                <p>{description}</p>
                <p>{category}</p>
            </div>
            <ul>
                {tags.map((tag, index) => {
                    return (
                        <div key={index}>
                            <li>{tag}</li>
                        </div>
                    );
                })}
            </ul> */

  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{tags}</Typography>

        <Typography>{price}</Typography>
        <Typography>{category}</Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
