import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils"
const PRIMARY_500 = "#AD0505";

const Button = styled.button`
border-radius: 2px;
min-width: 100px;
padding: 12px 24px;
font-size: ${typeScale.paragraph};
cursor: pointer;
display: block;
font-family: ${defaultTheme.primaryFont};
`;

//inherit from Button component
const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
`;

const SecondaryButton = styled(Button)`
background-color: ${defaultTheme.primaryActiveColor};
height: 45px;
width: 178px;
border: 3px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};
padding: 12px 24px;
font-size: 1rem;
`;

const TertiaryButton = styled(Button)`
background-color: none;
height: 45px;
width: 178px;
border: 3px solid ${defaultTheme.primaryColor};
color: ${defaultTheme.primaryColor};
padding: 12px 24px;
font-size: 1rem;
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };