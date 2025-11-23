import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Login() {
  return (
    <Box sx={{ maxWidth: 400, margin: "2rem auto" }}>
      <Paper sx={{ padding: 3 }}>
        <h2>Login</h2>

        <TextField
          fullWidth
          label="Username"
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
