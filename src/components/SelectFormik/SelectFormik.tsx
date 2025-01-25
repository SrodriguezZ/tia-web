import { Box, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import Select from 'react-select'

interface OptionType<T> {
    value: string | number;
    label: string;
    [key: string]: any;
    icon?: React.ReactNode;
  }

interface CustomSelectProps {
    options?: OptionType<T>[];
    isDisabled?: boolean;
    isLoading?: boolean;
    label: string;
    id?: string;
    name?: string;
    placeholder?: string;
    onChange?: (option: T | null | undefined) => void;
    touched?: boolean;
    errorMessage?: string;
    isClearable?: boolean;
    isSearchable?: boolean;
    value: OptionType<T> | null | undefined;
}
export const SelectFormik = forwardRef(function <T>(
    props: CustomSelectProps<T>,
    ref: React.ForwardedRef<any>
) {
    const {
        onChange,
        onInputChange,
        options,
        value,
        label,
        height = "32px",
        placeholder = "Select...",
        isSearchable = false,
        isClearable = false,
        isDisabled = false,
        touched,
        errorMessage,
        name,
        id,
        ...otherProps
    } = props;

    const customStyles = {
        menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
        control: (base: any, state: any) => ({
            ...base,
            borderRadius: "8px",
            fontSize: "12px",
            top: "5px",
            minHeight: "32px",
            width: "100%",
        }),
    };

   // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [valueControl, setValueControl] = useState<OptionType<T>>(value);

    const handleSelectChange = (option: OptionType<T>) => {
        if (props.onChange !== undefined) {
            props.onChange(option as T);
        }
        const aux = { ...valueControl };
        aux.value = option != null ? option.value : "";
        setValueControl(aux);
    };

    const handleInputChange = (inputValue: string) => {
        if (onInputChange) {
          //  setIsLoading(true);
            onInputChange(inputValue);
            setIsLoading(false);
        }
    };

    return (
        <Box style={{ marginLeft: "10px" }}>
            {label != null && (
                <Typography
                    fontSize="small"
                    fontWeight="bold"
                    //sx={{ color: theme.palette.text.main }}
                >
                    {label}
                </Typography>
            )}
            <Select
                placeholder={placeholder}
                onChange={(option: OptionType<T>) => handleSelectChange(option)}
                onInputChange={(inputValue: string) => handleInputChange(inputValue)}
                //defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                //isLoading={isLoading}
                isClearable={isClearable}
                styles={customStyles}
                // isRtl={isRtl}
                isSearchable={false}
                value={value}
                name={name}
                id={id}
                options={options}
               
                ref={ref}
                menuPortalTarget={document.body}
                {...otherProps}
                getOptionLabel={(option:OptionType<T>) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    {option.icon && <span style={{ marginRight: 8 }}>{option.icon}</span>}
                    {option.label}
                </div>
                )}
            />
            {touched && errorMessage ? (
                <Typography fontSize={12} color={'#D32F2F'} mt={1.5} marginLeft={'10px'}>
                    {errorMessage}
                </Typography>
            ) : null}
        </Box>
    );
});