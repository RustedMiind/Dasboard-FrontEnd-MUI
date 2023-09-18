import { Stack } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const drawerWidth = 220;
export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

function Layout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />
        <Box className="page-content">
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            quos vitae officiis inventore rem veniam distinctio, suscipit
            dolores, maiores iste eum praesentium perferendis tenetur expedita
            natus illum? Accusantium molestias modi, alias odit, quasi error
            autem ab iusto explicabo ex nesciunt perspiciatis? Inventore error
            quisquam necessitatibus ut incidunt dignissimos, adipisci similique
            odit veritatis porro et ea aperiam rerum atque vero, perspiciatis
            pariatur sit minima aut quasi sint animi! Assumenda, sapiente optio.
            Sapiente unde, fugiat labore quidem quae ex amet autem. Delectus,
            qui consequuntur tempora nulla recusandae explicabo porro ea sunt
            commodi eveniet fugit natus quisquam voluptas omnis quae earum
            reiciendis corporis.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
