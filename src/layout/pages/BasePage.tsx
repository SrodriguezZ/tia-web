import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DrawerMenu } from "./Menu/Menu";
import { Badge, Grid, styled, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubMenu } from "./Menu/submenu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { StoreZustand } from "../../store/MenuZustand";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcons from "../../assets/img/icon2.png";
import { CustomInput } from "../../components/InputFromik";
import { useRef, useState,useEffect } from "react";

//Icon
import SearchIcon from '@mui/icons-material/Search';
import { IconSubMenu } from "../../components";

const drawerWidth = 240;

export const BasePage = ({ children }: React.PropsWithChildren) => {
    const { count } = StoreZustand();
    //const [mobileOpen, setMobileOpen] = React.useState(false);

    //const [isClosing, setIsClosing] = React.useState(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [openIconSubMenu, setOpenIconSubMenu] = useState<boolean>(false);

    const navigate = useNavigate();

    // const handleDrawerClose = () => {
    //     setIsClosing(true);
    //     setMobileOpen(false);
    // };

    // const handleDrawerToggle = () => {
    //     if (!isClosing) {
    //         setMobileOpen(!mobileOpen);
    //     }
    // }

    const close = () => {
        setOpenModal(false);
    };

    const openIconMenu = () => { 
        setOpenIconSubMenu((prev) => !prev)
     }

    // const handleDrawerTransitionEnd = () => {
    //     setIsClosing(false);
    // };


    const submitCompras = () => {
        navigate("/compras");
    };

    const openDrawer = () => {
        setOpenModal(true)
     }
     const containerRef = useRef<HTMLDivElement | null>(null);

     const handleClickOutside = (event:MouseEvent) => {
       // console.log(event.target)
        //console.log(containerRef.current)
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setOpenIconSubMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    }));
    return (
        <Box sx={{ display: "flex" }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                className="styleNavbar"
                sx={{
                    // width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Grid className="headerStyle">
                        <div style={{display:'grid', gridTemplateColumns:'0.2fr 1fr',  alignItems:'center'}}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                        edge="start"
                                onClick={openDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                            Street Food
                            </Typography>
                        </div>
                        <div className="searchStyle" ref={containerRef}>
                            <CustomInput type="search" onClick={openIconMenu} labelStyle='white' fontSize={14} inputPros={{placeholder:'Search',style:{background:'white'}}}/>
                            <Tooltip title="Search">
                            <IconButton

                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                    onClick={submitCompras}
                                >
                                    <Badge
                                        badgeContent={count}
                                        color="secondary"
                                    >
                                        <SearchIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            {openIconSubMenu && (<IconSubMenu/>)}

                        </div>

                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', alignItems:'center'}}>
                            <SubMenu />
                            <Tooltip   title="Comprar">
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                    onClick={submitCompras}
                                >
                                    <Badge
                                        badgeContent={count}
                                        color="secondary"
                                    >
                                        <LocalGroceryStoreIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/**Menu */}
            <Box
                component="nav"
                //sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <DrawerMenu />
                </Drawer> */}
                <Drawer
                    variant="temporary"
                    open={openModal}
                    onClose={close}
                    //onTransitionEnd={handleDrawerTransitionEnd}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        //display: { xs: "none", sm: "block" },
                        display: { xs: "block", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            backgroundColor: "#0093E9",
                            backgroundImage:
                                "linear-gradient(238deg, #0093E9 1%, #000000 95%)",
                        },
                    }}
                >
                    <DrawerHeader>
                        <Grid className="menuStyle">
                            <img
                                src={MenuIcons}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "30px",
                                    marginLeft: "30px",
                                }}
                                alt="menu"
                            />
                            <IconButton onClick={close}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Grid>
                    </DrawerHeader>
                    <DrawerMenu />
                </Drawer>
            </Box>
            {/*Pages */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 0,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Box sx={{ height: "100%", margin: "10px" }}>{children}</Box>
            </Box>
        </Box>
    );
};
