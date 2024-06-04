import { Grid, Text } from "@chakra-ui/react";

import { useFacade } from "./hooks";
import { FacadeProps } from "./types";

export const Facade = (props: FacadeProps) => {
  const children = useFacade(props);

  return (
    <Grid gap={4} justifyItems="start">
      <Text fontWeight={600} fontSize="lg">
        {props.question.title}
      </Text>

      {children}
    </Grid>
  );
};
