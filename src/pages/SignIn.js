import React from "react";
import { TextField, Button, Box, Link, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword, register } from "../redux/authSlice";
import { Link as RouterLink } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Link component={RouterLink} to="../forgot-password">
          Forgot Password?
        </Link>
        <Link component={RouterLink} to="../sign-up">
          Don't have a account? Sign Up
        </Link>
      </Box>
    </form>
  );
}

export default SignIn;
