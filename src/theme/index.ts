import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { sizes } from "./sizes";

export const theme = extendTheme({
  sizes,
  space: sizes,
  ...fonts,
});
