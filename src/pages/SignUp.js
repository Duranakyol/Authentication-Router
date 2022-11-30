import React from "react";
import {
  TextField,
  CssBaseline,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function SignUp() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar sx={{ mx: "auto", bgcolor: "blueviolet" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Register
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            required
            autoComplete="name"
            autoFocus
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            SIGN-UP
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Link>Already have a account? Sign In</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignUp;
