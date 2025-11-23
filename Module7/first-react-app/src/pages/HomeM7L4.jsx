import Paper from "@mui/material/Paper";
import PostList from "../components/PostList"

export default function Home() {
  return (
    <>
      <Paper sx={{ padding: 3, margin: 2 }}>
        <h2>Home Page</h2>
        <p>Welcome to the MUI-styled version of Exercise 4!</p>
      </Paper>

      <PostList />
    </>
  );
}

