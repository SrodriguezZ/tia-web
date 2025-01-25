import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { menuConfiguration } from "../../../router/config/MenuConfiguration";
import { useNavigate } from "react-router-dom";
import { useProductoZustand } from "../../../store/TableZustand";
import "../style/style.css";

export const DrawerMenu = () => {
    const { setSelectListProducto } = useProductoZustand();
    const navigate = useNavigate();
    const submitNvigate = (path: string) => {
        navigate(path);
        setSelectListProducto([]);
    };
    return (
        
        <div >
           


            <Divider />
            <List>
                {menuConfiguration.map((menuItem, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{ padding: "10px" }}
                    >
                        <ListItemButton
                            onClick={() => submitNvigate(menuItem.path)}
                            sx={{
                                "&:hover": {
                                      backgroundImage: 'linear-gradient(19deg, #060626 0%, #21D4FD 100%)',
                                    //color: "black",
                                    borderRadius: "8px",
                                },
                            }}
                        >
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
