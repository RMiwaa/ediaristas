import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldStyled = styled(TextField)`
  .MuiImputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutLinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
