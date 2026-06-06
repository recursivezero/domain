import { CONFIG } from "./config.js";
import { isValidInput, getDateTime } from "./utils.js";
import { addEntry, isDuplicate, removeEntry } from "./state.js";

export const createEntry = (value) => {
  if (!isValidInput(value, CONFIG.MAX_LENGTH)) {
    return {
      success: false,
      message: "Invalid input"
    };
  }

  if (!CONFIG.ALLOW_DUPLICATES && isDuplicate(value)) {
    return {
      success: false,
      message: "Duplicate not allowed"
    };
  }

  const { date, time } = getDateTime();
  const entry = {
    value,
    date,
    time,
    user: CONFIG.CURRENT_USER.name
  };

  addEntry(entry);

  return {
    success: true,
    entry
  };
};

export const deleteEntry = (value) => {
  removeEntry(value);

  return {
    success: true
  };
};
