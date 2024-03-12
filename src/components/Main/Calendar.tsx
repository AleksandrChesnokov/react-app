import React from "react";
import { useState } from "react";
import { MuiDateTimePicker } from "./components/MuiDateTimePicker.tsx";
import { ColorfullButton } from "./components/ColorfullButton.tsx";
import dayjs from "dayjs";

export const Calendar = () => {
  const [year, setYear] = useState<dayjs.Dayjs | null>(dayjs);
  const [buttonColor, setButtonColor] = useState("white");
  const [buttonText, setButtonText] = useState("Увеличить на +1");
  const [error, setError] = useState<boolean | null>(null);

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const handleIncrement = () => {
    setButtonText(
      buttonText === "Увеличить на +1"
        ? "Нажми, чтобы еще увеличить на +1 :)"
        : "Увеличить на +1"
    );
    setButtonColor(randomColor);
    setYear((prevYear) => dayjs(prevYear).add(1, "year"));
  };

  return (
    <main>
      <MuiDateTimePicker
        year={year}
        handleChange={setYear}
        handleError={setError}
      />
      <ColorfullButton
        error={error}
        text={buttonText}
        backgroundColor={buttonColor}
        handleClick={handleIncrement}
      />
    </main>
  );
};
