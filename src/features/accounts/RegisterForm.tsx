import { LockOpen } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../../libs/apis/auth";

export default function RegisterForm() {
  const [register, setRegister] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await registerUser(register);
    console.log(response);
    navigate("/login");
  };

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        gap: 3,
        maxWidth: "md",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        color="secondary.main"
      >
        <LockOpen fontSize="large" />
        <Typography variant="h4">Register</Typography>
      </Box>
      <TextField
        label="Email"
        name="email"
        value={register.email}
        onChange={(e) => setRegister({ ...register, email: e.target.value })}
      />
      <TextField
        label="Display name"
        name="displayName"
        value={register.displayName}
        onChange={(e) =>
          setRegister({ ...register, displayName: e.target.value })
        }
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={register.password}
        onChange={(e) => setRegister({ ...register, password: e.target.value })}
      />
      <Button type="submit" variant="contained" size="large">
        Register
      </Button>
      <Typography sx={{ textAlign: "center" }}>
        Already have an account?
        <Typography sx={{ ml: 2 }} component={Link} to="/login" color="primary">
          Sign in
        </Typography>
      </Typography>
    </Paper>
  );
}
