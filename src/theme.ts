import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },

  colors: {
    brand: {
      50: "#EEF4FF",
      100: "#D9E6FF",
      200: "#B7D0FF",
      300: "#8EB2FF",
      400: "#5B8CFF",
      500: "#2563EB",
      600: "#1D4ED8",
      700: "#1E40AF",
      800: "#1E3A8A",
      900: "#172554",
    },

    background: {
      primary: "#F4F7FB",
      secondary: "#FFFFFF",
    },

    sidebar: {
      bg: "#0F2D5C",
      hover: "#1E4FA8",
      active: "#2563EB",
    },
  },

  styles: {
    global: {
      body: {
        bg: "#F4F7FB",
        color: "#1F2937",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
        fontWeight: "600",
      },

      variants: {
        solid: {
          bg: "#2563EB",
          color: "white",

          _hover: {
            bg: "#1D4ED8",
          },
        },
      },
    },

    Input: {
      baseStyle: {
        field: {
          borderRadius: "10px",
        },
      },
    },

    Select: {
      baseStyle: {
        field: {
          borderRadius: "10px",
        },
      },
    },

    Card: {
      baseStyle: {
        container: {
          borderRadius: "16px",
          bg: "white",
          boxShadow: "sm",
        },
      },
    },
  },
});

export default theme;