import React from "react";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ruRU } from "@mui/x-date-pickers/locales";
import "dayjs/locale/ru";
import { DateTimeValidationError } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface MuiDateTimePickerProps {
  year: dayjs.Dayjs | null;
  handleChange: (value: dayjs.Dayjs | null) => void;
  handleError: (error: boolean) => void;
}

export const MuiDateTimePicker = ({
  year,
  handleChange,
  handleError,
}: MuiDateTimePickerProps) => {
  const checkError = (error: DateTimeValidationError) => {
    if (error === "invalidDate") {
      handleError(true);
    } else {
      handleError(false);
    }
  };

  return (
    <LocalizationProvider
      localeText={
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale={"ru"}
      dateAdapter={AdapterDayjs}
    >
      <div className="calendar">
        <DateTimePicker
          value={year}
          onChange={(value: dayjs.Dayjs | null) => handleChange(value)}
          label="Год"
          views={["year"]}
          onError={(error) => checkError(error)}
        />
      </div>
    </LocalizationProvider>
  );
};
