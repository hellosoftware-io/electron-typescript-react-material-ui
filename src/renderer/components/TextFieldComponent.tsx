import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextField, TextFieldProps as MUITextFieldProps, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type TextFieldVariants = 'outlined' | 'standard' | 'filled';

type CustomTextFieldProps<Variant extends TextFieldVariants = 'outlined'> = MUITextFieldProps & {
  control: Control<any>;
  name: string;
  helperText?: string;
  variant?: Variant;
};

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  control,
  name,
  helperText,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...field}
      {...rest}
      helperText={error ? error.message : helperText}
      error={!!error}
      variant="outlined"
      fullWidth
    />
  );
};

export const TextFieldStyled = styled(TextField)`
  .MuiOutlinedInput-root {
    background: ${({ theme }) => theme.palette.background.paper};
  }
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const InputContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputIconStyled = styled('i')`
  text-align: center;
`;