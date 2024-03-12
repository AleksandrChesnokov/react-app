import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    let isValid = true;

    if (!email.includes("@")) {
      setEmailError(true);
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main>
        <Typography variant="h6">Введенные данные:</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Пароль: {password}</Typography>
      </main>
    );
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "281px",
        }}
      >
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Неверный формат email" : ""}
          margin="normal"
        />
        <TextField
          type="password"
          label="Пароль"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={
            passwordError ? "Пароль должен содержать не менее 6 символов" : ""
          }
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Войти
        </Button>
      </form>
    </main>
  );
};
