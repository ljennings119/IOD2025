import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const posts = [
  { id: 1, title: "First Post", body: "This is my first post." },
  { id: 2, title: "Second Post", body: "Here is another post." },
];

export default function PostList() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
