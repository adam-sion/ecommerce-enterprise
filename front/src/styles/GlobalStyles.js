import { createGlobalStyle } from "styled-components";
import "@fontsource/gabarito"; // Import Gabarito font
import "@fontsource/poppins"; // Import Poppins font
import "@fontsource/cookie"; // Import cookie font

const GlobalStyles = createGlobalStyle`

/* Global Variables */
:root {
  /* Colors */
  --primary-color: #FFB7C3; /* Soft Red for accents */
  --primary-color-light-1: #ffbec9; 
  --primary-color-light-2: #ffc5cf; 
  --primary-color-light-3: #ffccd5; 
  --primary-color-light-4: #ffd3db; 
  --primary-color-light-5: #ffe0e6;
  --primary-color-light-6: #FFE6EB;
  --primary-color-light-7: #FFECF0;
  --primary-color-light-8: #FFF3F5;
  --primary-color-light-9: #FFF9FA;
  --primary-color-dark-1: #e5a4af; 
  --primary-color-dark-2: #cc929c; 
  --primary-color-dark-3: #b28088; 
  --primary-color-dark-4: #996d75;
  --primary-color-dark-5: #7a575e;
  --primary-color-dark-5: #5c4146;

  
  --background-primary-transparent:color-mix(in srgb, var(--primary-color) 30%, transparent);
  --background-primary-transparent-2:color-mix(in srgb, var(--primary-color) 15%, transparent);

  --secondary-color: #76f4e7; 
  --accent-color: #F96167;
  --accent-color-light-1:#fa8185;
  --background-color: #FFF;
  --text-color: #333333; 
  --light-grey-color: #EDEDED; 
  --grey-color:#555;
  --dark-grey-color: #4A4A4A; 
  --success-color: #28a745; 
  --warning-color: #ffc107; /* Yellow for warning messages */
  --danger-color: #dc3545; /* Red for error messages */
  --info-color: #17a2b8; /* Blue for informational messages */
  --disabled-color: #6c757d; /* Grey for disabled elements */

  /* Font Family */
  --font-primary: "Gabarito", sans-serif; /* Primary font (imported from Google Fonts) */
   /* Primary font (imported from Google Fonts) */
  --font-secondary: 'Poppins', sans-serif; /* Secondary font (imported from Google Fonts) */


  --font-tertiary: "Cookie", cursive;
  /* Font Size */
  --font-size-h1: 3.5rem;
  --font-size-h2: 2.75rem;
  --font-size-h3: 2.25rem;
  --font-size-h4: 1.75rem;
  --font-size-h5: 1.5rem;
  --font-size-h6: 1.25rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-button: 0.875rem;


  /* Spacing */
  --spacing-xs: 0.3125rem;
  --spacing-sm:0.625rem;
  --spacing-md: 1.25rem;
  --spacing-lg: 1.875rem;
  --spacing-xl: 2.5rem;
  --spacing-xxl: 3.75rem;
  --spacing-xxxl: 5rem;


    /* Border */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 16px;

    /* shadow */
  --shadow-small: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* transition */
  --transition-quick: 0.3s ease-in-out;
  --transition-normal: 0.5s ease-in-out;
  --transition-slow: 0.7s ease-in-out;

  --zindex-dropdown: 1000;
  --zindex-modal: 1050;
  --zindex-tooltip: 1100;

  --max-width-screen:  1740px;
}

/* Responsive Font Sizes */
@media (max-width: 1200px) {
  :root {
    /* Font */
    --font-size-h1: 3rem;
    --font-size-h2: 2.5rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.75rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-body: 0.875rem;
    --font-size-small: 0.75rem;
    --font-size-button: 0.875rem;

  }
}

@media (max-width: 768px) {
  :root {
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.75rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.15rem;
    --font-size-h6: 1rem;
    --font-size-body: 0.875rem;
    --font-size-small: 0.75rem;
    --font-size-button: 0.75rem;

  }
}

@media (max-width: 480px) {
  :root {
    --font-size-h1: 2rem;
    --font-size-h2: 1.75rem;
    --font-size-h3: 1.5rem;
    --font-size-h4: 1.25rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --font-size-body: 0.75rem;
    --font-size-small: 0.625rem;
    --font-size-button: 0.75rem;
  }
}




  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: var(--font-secondary);
    background-color: #fff;
    color: var(--text-color);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: var(--font-size-body);
    letter-spacing: 0.02em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    font-family: var(--font-secondary);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
