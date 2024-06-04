import { ChakraProvider } from "@chakra-ui/react";

import { Test } from "@/pages";

export const App = () => {
  return (
    <ChakraProvider>
      <Test />
    </ChakraProvider>
  );
};
