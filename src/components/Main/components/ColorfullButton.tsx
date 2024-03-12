import React from "react";
import { MyButton } from "../../../ui/MyButton.tsx";

type Button = {
  text: string;
  error?: boolean | null | undefined;
  backgroundColor: string;
  handleClick: () => void;
};

export const ColorfullButton = ({
  text,
  backgroundColor,
  error,
  handleClick,
}: Button) => {
  return (
    <MyButton
      error={error}
      text={error ? "Введите корректный год" : text}
      backgroundColor={backgroundColor}
      handleClick={handleClick}
    />
  );
};
