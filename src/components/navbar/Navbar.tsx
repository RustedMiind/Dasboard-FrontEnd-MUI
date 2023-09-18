import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { drawerWidth } from "../../Layout/Layout";

import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Navbar({ open, handleDrawerOpen }: PropsType) {
  return (
    <AppBar position="fixed" open={open} elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            transition: "200ms",
            marginRight: 2,
            ...(open && {
              opacity: 0,
              pointerEvents: "none",
              marginRight: -4,
            }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Navbar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

type PropsType = {
  open: boolean;
  handleDrawerOpen: () => void;
};
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export default Navbar;
