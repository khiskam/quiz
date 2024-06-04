import { Card } from "@chakra-ui/react";

import { useDuration } from "./hooks";
import { TimerProps } from "./types";
import { formatTime } from "./utils";

export const Timer = (props: TimerProps) => {
  const duration = useDuration(props);

  return (
    <Card px={4} py={1}>
      {formatTime(duration)}
    </Card>
  );
};
