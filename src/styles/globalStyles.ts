import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-dark: ${({ theme }) => theme.colors.primaryDark};
    --color-primary-light: ${({ theme }) => theme.colors.primaryLight};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-divider: ${({ theme }) => theme.colors.divider};
    --color-white: ${({ theme }) => theme.colors.white};
    --color-black: ${({ theme }) => theme.colors.black};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-info: ${({ theme }) => theme.colors.info};
    --color-warning: ${({ theme }) => theme.colors.warning};
    --color-danger: ${({ theme }) => theme.colors.danger};
    --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --border-radius-md: ${({ theme }) => theme.borderRadius.md};
    --border-radius-lg: ${({ theme }) => theme.borderRadius.lg};
    --border-radius-xl: ${({ theme }) => theme.borderRadius.xl};
    --border-radius-round: ${({ theme }) => theme.borderRadius.round};
    --shadow-sm: ${({ theme }) => theme.shadows.sm};
    --shadow-md: ${({ theme }) => theme.shadows.md};
    --shadow-lg: ${({ theme }) => theme.shadows.lg};
    --shadow-xl: ${({ theme }) => theme.shadows.xl};
    --font-size-xs: ${({ theme }) => theme.typography.fontSizes.xs};
    --font-size-sm: ${({ theme }) => theme.typography.fontSizes.sm};
    --font-size-md: ${({ theme }) => theme.typography.fontSizes.md};
    --font-size-lg: ${({ theme }) => theme.typography.fontSizes.lg};
    --font-size-xl: ${({ theme }) => theme.typography.fontSizes.xl};
    --font-size-xxl: ${({ theme }) => theme.typography.fontSizes.xxl};
    --font-weight-light: ${({ theme }) => theme.typography.fontWeights.light};
    --font-weight-regular: ${({ theme }) =>
      theme.typography.fontWeights.regular};
    --font-weight-medium: ${({ theme }) => theme.typography.fontWeights.medium};
    --font-weight-bold: ${({ theme }) => theme.typography.fontWeights.bold};
    --backdrop-color: rgba(255, 255, 255, 0.1);
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: var(--font-size-md);
    color: var(--color-text);
    background-color: var(--color-background);
    transition: color 0.3s, background-color 0.3s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  #root {
    height: 100%;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  *:disabled {
    cursor: not-allowed;
  }

  input:focus, 
  button:focus, 
  textarea:focus, 
  select:focus {
    outline: 2px solid var(--color-border);
    outline-offset: -1px;
  }

  ul, ol {
    list-style: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
