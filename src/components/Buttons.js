import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
    `,
    large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
    `,
    warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
        background-color: ${defaultTheme.status.warningColorHover};
        outline: 3px solid ${defaultTheme.status.warningColorHover};
    }

    &:active {
        background-color: ${defaultTheme.status.warningColorActive};
    }
    `,
    // secondaryWarning: () => `
    // background: none;
    // border-color: ${defaultTheme.status.warningColor};
    // `
    primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
    `,
    tertiaryButtonuWarning: () => `
  background: none;
  border: 2px solid ${defaultTheme.status.warningColor};
`,
    error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
    primaryButtonError: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
  `,
    secondaryButtonError: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
    tertiaryButtonError: () => `
  background: none;
  border: 2px solid ${defaultTheme.status.warningColor};
`,
    success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
    primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `,
    secondaryButtonSuccess: () => `
    border: 2px solid ${defaultTheme.status.successColor};
  `,
    tertiaryButtonuSccess: () => `
  background: none;
  border: 2px solid ${defaultTheme.status.successColor};
`,
};

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: ${typeScale.paragraph};
cursor: pointer;
${'' /* display: block; */}
font-family: ${defaultTheme.primaryFont};

&:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
    transition: background-color 0.2s linear, color 0.2s linear
}

&:focus {
outline: 3px solid ${defaultTheme.primaryHoverColor};
outline-offset: 2px;
}

&:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border: ${defaultTheme.primaryActiveColor};;
    color: ${defaultTheme.textColorOnPrimary};
}
`;

//inherit from Button component
const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: ${defaultTheme.textColorInverted};
    padding: 12px 24px;
    font-size: 1rem;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed
    }

    ${'' /* we have to do this on individual buttons */}
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
background-color: ${defaultTheme.primaryActiveColor};
border: 3px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};
padding: 12px 24px;
font-size: ${typeScale.paragraph};

&:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed
}
${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
background-color: none;
height: 45px;
width: 178px;
border: 3px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};
padding: 12px 24px;
font-size: 1rem;

&:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        border: none;
        cursor: not-allowed
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };