import React from "react";

type Button = {
  text: string;
  error?: boolean | null | undefined;
  backgroundColor: string;
  handleClick: () => void;
};

export const MyButton = ({
  text,
  backgroundColor,
  handleClick,
  error,
}: Button) => {
  return (
    <button
      className="my-btn"
      style={{ backgroundColor }}
      onClick={handleClick}
      disabled={error === true}
    >
      {text}
    </button>
  );
};
