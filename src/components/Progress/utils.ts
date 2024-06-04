import { theme } from "@chakra-ui/react";

export const getUnitColor = (idx: number, current: number) => {
  if (idx < current) {
    return theme.colors.gray[600];
  } else if (idx === current) {
    return theme.colors.red[500];
  } else {
    return undefined;
  }
};
