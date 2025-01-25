import { Box, Typography, TextField, TextFieldProps, FilledInputProps, OutlinedInputProps, InputProps } from "@mui/material";
export interface CustomInputProps {
    label?: string;
    icon?: string;
    iconAlign?: "start" | "end";
    TextFieldProps?: TextFieldProps;
    id?: string;
    name?: string;
    margin?: TextFieldProps["margin"];
    value?: any;
    fontSize?: number;
    disabled?: boolean;
    flex?: number;
    onClick?:()=>void;
    type?: TextFieldProps["type"];
    labelStyle?: 'black' | 'white';
    onChange?: TextFieldProps["onChange"];
    onBlur?: TextFieldProps["onBlur"];
    error?: TextFieldProps["error"];
    helperText?: TextFieldProps["helperText"];
    inputPros?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>;
}
export const CustomInput = ({
    label,
    TextFieldProps,
    id,
    name,
    margin,
    type,
    flex = 1,
    value,
    disabled = false,
    onBlur = () => {},
    error = false,
    helperText = "",
    labelStyle = 'black',
    fontSize = 10,
    inputPros,
    onChange = () => {},
    onClick
}: CustomInputProps) => {

    const defaultInputProps = {
        style: {
            borderRadius: 8,
            height: 35,
           
        }
    };

    return (
        <>
            <Box
                flex={flex}
                width={"100%"}
                marginRight={1}
                marginLeft={1}
                marginBottom={2}
                marginTop={1}
            >
                <Typography
                    fontSize={fontSize}
                    fontWeight="600"
                    variant="caption"
                    sx={{ color: labelStyle }}
                >
                    {label}
                </Typography>
                <TextField
                    {...TextFieldProps}
                    disabled={disabled}
                    onClick={onClick}
                    id={id}
                    name={name}
                    margin={margin}
                    type={type}
                    size="small"
                    value={value}
                    fullWidth
                    variant="outlined"
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    helperText={helperText}
                    // 
                    InputProps={
                        {
                            ...defaultInputProps,
                            ...inputPros
                        }
                    }
                />
            </Box>
        </>
    );
};
