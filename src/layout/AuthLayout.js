import { Navigate, Outlet } from "react-router-dom";
import { Avatar, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useSelector } from "react-redux";
import { useIsLoggedIn } from "../config/hooks";

function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  const error = useSelector((state) => state.auth.error);

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn === true) {
    return <Navigate replace to="/" />;
  }

  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Avatar sx={{ mx: "auto", bgcolor: "blueviolet" }}>
        <LockOutlinedIcon />
      </Avatar>
      {error && (
        <Typography sx={{ textAlign: "center", color: "error.main" }}>
          {error}
        </Typography>
      )}
      <Outlet />
    </Container>
  );
}

export default AuthLayout;
