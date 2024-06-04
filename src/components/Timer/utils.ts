import { intervalToDuration } from "date-fns";

import { MILLISECOND, QUIZ_TIMER } from "./constants";

export const formatNumber = (num: number | undefined) => {
  return String(num ?? "").padStart(2, "0");
};

export const formatTime = (duration: number) => {
  const time = intervalToDuration({ start: 0, end: duration * MILLISECOND });

  return `${formatNumber(time.minutes)}:${formatNumber(time.seconds)}`;
};

export const loadTimer = (): number | undefined => {
  const data = localStorage.getItem(QUIZ_TIMER);

  if (!data) {
    return;
  }

  return JSON.parse(data);
};

export const saveTimer = (duration?: number) => {
  localStorage.setItem(QUIZ_TIMER, JSON.stringify(duration));
};
