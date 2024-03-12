import "./App.css";
import React from "react";
import { Pages } from "./pages/Pages.tsx";
import { Calendar } from "./components/Main/Calendar.tsx";
import { Main } from "./components/Main/Main.tsx";
import { LoginForm } from "./components/Main/LoginForm.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route index element={<Main />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="form" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
