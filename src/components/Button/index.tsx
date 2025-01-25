import { SxProps, Theme } from '@mui/material';
import Button, { ButtonPropsColorOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

interface Props{
    text?: string;
    onClick?:()=>void;
    style? : SxProps<Theme>;
    color? :  OverridableStringUnion<"inherit" | "error" | "primary" | "secondary" | "info" | "success" | "warning", ButtonPropsColorOverrides>
}
export const ButtonComponent = ({text, onClick, style, color = 'primary'}:Props) => {
    return (
        <Button color={color} variant="contained" onClick={onClick} sx={style}>
          {text}
        </Button>
      );
}
