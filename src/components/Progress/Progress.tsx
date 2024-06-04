import { Button, Grid } from "@chakra-ui/react";

import { ProgressProps } from "./types";
import { getUnitColor } from "./utils";

export const Progress = ({ current, done, total, onPage }: ProgressProps) => {
  return (
    <Grid gridTemplateColumns="repeat(auto-fit, minmax(20px, 1fr))" gap={1}>
      {[...Array(total).keys()].map((_, idx) => (
        <Button
          key={idx}
          h="3"
          w="100%"
          isDisabled={idx > done}
          bg={getUnitColor(idx, current)}
          onClick={idx <= done ? () => onPage(idx) : undefined}
        />
      ))}
    </Grid>
  );
};
