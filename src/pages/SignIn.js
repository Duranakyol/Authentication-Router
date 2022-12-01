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
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword } from "../redux/authSlice";

function SignIn() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  console.log("->UP", email, password);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar sx={{ mx: "auto", bgcolor: "blueviolet" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            SIGN-IN
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Link>Forgot Password?</Link>
            <Link>Don't have a account? Sign Up</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
