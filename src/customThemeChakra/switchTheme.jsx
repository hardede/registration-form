import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: "#141422",
  },
  track: {
    bg: "#8f8f9f",
    _checked: {
      bg: "#00d8be",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
