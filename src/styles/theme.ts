export const theme = {
  colors: {
    primary: "#5BAA60",
    primaryDark: "#3e8e41",
    primaryLight: "#81C784",
    secondary: "#FFC107",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    error: "#D32F2F",
    text: "#212121",
    textSecondary: "#757575",
    border: "#F0F0F0",
    divider: "#EEEEEE",
    white: "#FFFFFF",
    black: "#000000",
    success: "#4CAF50",
    info: "#2196F3",
    warning: "#FFC107",
    danger: "#F44336",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    round: "50%",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    md: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    lg: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    xl: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export type Theme = typeof theme;
