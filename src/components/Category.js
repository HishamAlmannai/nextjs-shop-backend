import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Category({ id, name, description }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h5">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
