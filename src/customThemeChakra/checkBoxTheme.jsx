import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  icon: {
    color: "#2c2e3e",
  },
  control: {
    bg: "#2c2e3e",
    border: "transparent",
    _disabled: {
      bg: "#2c2e3e",
    },
    _checked: {
      bg: "#00d8be",
      border: "transparent",
      _hover: {
        bg: "#00d8be",
      },
    },
    _hover: {
      bg: "transparent",
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
