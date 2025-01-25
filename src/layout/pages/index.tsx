// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { DrawerMenu } from "./Menu/Menu";
// import { Badge, Grid, Tooltip } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { SubMenu } from "./Menu/submenu";
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import { StoreZustand } from "../../store/MenuZustand";

// const drawerWidth = 240;

// interface Props {

//     children?: React.ReactNode;
// }

// export default function BasePage({ children }: Props) {
//     const{count} = StoreZustand();
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     const [isClosing, setIsClosing] = React.useState(false);
//     const navigate = useNavigate();
//     const handleDrawerClose = () => {
//         setIsClosing(true);
//         setMobileOpen(false);
//     };

//     const handleDrawerTransitionEnd = () => {
//         setIsClosing(false);
//     };

//     const handleDrawerToggle = () => {
//         if (!isClosing) {
//             setMobileOpen(!mobileOpen);
//         }
//     };

//     const submitCompras = () => {
//         navigate("/compras");
//     };


//     return (
//         <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                     backgroundImage: 'linear-gradient(19deg, #060626 0%, #21D4FD 100%)'
//                 }}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: "none" } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             width: "100%",
//                         }}
//                     >
//                         <Grid container>
//                             <Grid item xs={10} md={11}>
//                                 <Typography variant="h6" noWrap component="div">
//                                     Tienda productos
//                                 </Typography>
//                             </Grid>
//                             <Grid item >
//                                 <SubMenu />
//                             </Grid>
//                             <Grid item >
//                             <Tooltip title="Comprar">
//                                 <IconButton
//                                     size="large"
//                                     aria-label="show 17 new notifications"
//                                     color="inherit"
//                                     onClick={submitCompras}
//                                 >
//                                     <Badge badgeContent={count} color="secondary">
//                                         <LocalGroceryStoreIcon  />
//                                     </Badge>
//                                 </IconButton>
//                                 </Tooltip>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             {/**Menu */}
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 <Drawer
//                     variant="temporary"
//                     open={mobileOpen}
//                     onTransitionEnd={handleDrawerTransitionEnd}
//                     onClose={handleDrawerClose}
//                     ModalProps={{
//                         keepMounted: true, 
//                     }}
//                     sx={{
//                         display: { xs: "block", sm: "none" },
//                         "& .MuiDrawer-paper": {
//                             boxSizing: "border-box",
//                             width: drawerWidth,
//                         },
//                     }}
//                 >
//                     <DrawerMenu />
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: "none", sm: "block" },
//                         "& .MuiDrawer-paper": {
//                             boxSizing: "border-box",
//                             width: drawerWidth,
//                         },
//                     }}
//                     open
//                 >
//                     <DrawerMenu />
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{
//                     flexGrow: 1,
//                     p: 3,
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                 }}
//             >
//                 <Toolbar />
//                 <Box className="gato" sx={{ height: "100%"}}>{children}</Box>
//             </Box>
//         </Box>
//     );
// }
