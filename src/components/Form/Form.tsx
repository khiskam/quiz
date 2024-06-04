import { Alert, Button, FormControl, Grid } from "@chakra-ui/react";

import { FormProps } from "./types";

export const Form = ({ children, error, onSubmit }: FormProps) => {
  return (
    <FormControl as="form" onSubmit={onSubmit}>
      <Grid gap={4} justifyItems="start">
        {error && (
          <Alert status="error" borderRadius={4}>
            {error}
          </Alert>
        )}

        {children}

        <Button colorScheme="red" size="md" type="submit">
          Ответить
        </Button>
      </Grid>
    </FormControl>
  );
};
