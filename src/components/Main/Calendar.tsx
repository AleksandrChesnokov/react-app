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
  const buttonMessages = [
    "Спасибо за нажатие!",
    "Отлично!",
    "Продолжайте в том же духе!",
    "Ура!",
    "Великолепно!",
    "Ты молодец!",
  ];

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const randomText = () => {
    const filteredMessages = buttonMessages.filter(
      (message) => message !== buttonText
    );
    const randomIndex = Math.floor(Math.random() * filteredMessages.length);
    const newMessage = filteredMessages[randomIndex];
    return newMessage;
  };

  const handleChangeButton = () => {
    setButtonText(randomText);
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
        handleClick={handleChangeButton}
      />
    </main>
  );
};
