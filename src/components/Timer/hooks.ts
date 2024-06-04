import { useLayoutEffect, useRef, useState } from "react";

import { MILLISECOND } from "./constants";
import { TimerProps } from "./types";
import { loadTimer, saveTimer } from "./utils";

export const useDuration = ({ initDuration, onFinish, stop }: TimerProps) => {
  const [duration, setDuration] = useState(() => loadTimer() ?? initDuration);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useLayoutEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        setDuration((prev) => {
          --prev;

          saveTimer(prev);
          return prev;
        });
      }, MILLISECOND);
    }

    if (duration === 0) {
      onFinish();
    }

    return () => clearTimeout(timerRef.current);
  }, [duration, onFinish, stop]);

  useLayoutEffect(() => {
    if (stop) clearTimeout(timerRef.current);
  }, [stop]);

  return duration;
};
