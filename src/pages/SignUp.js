import React from "react";
import { TextField, Button, Box, Link, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from "../redux/authSlice";
import { Link as RouterLink } from "react-router-dom";

function SignUp() {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  console.log("->UP", name, email, password);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Register
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        required
        autoComplete="name"
        value={name}
        autoFocus
        onChange={handleNameChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        required
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        required
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        {isLoading ? "Loading..." : "Sign-Up"}
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Link component={RouterLink} to="../sign-in">
          Already have a account? Sign In
        </Link>
      </Box>
    </form>
  );
}

export default SignUp;
