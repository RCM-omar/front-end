import { Typography, IconButton, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../../Utils/Constant";

import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { fetchTranslations } from "../../../i18n";
import { useThemeManagement } from "../../../Hooks/useThemeManagement";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open", 
})<AppBarProps>(({ theme, open }) => ({
  // !!!!!!!
  // backgroundColor : theme.palette.primary.main ,
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

interface HeaderProps {
  open: boolean;
  setOpen: (nextS: boolean) => void;
}

export default function Header({ open, setOpen }: HeaderProps) {
  const {setDirectionHandler} = useThemeManagement();
  const navigateTo = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar  position="fixed" open={open}>
      <Toolbar >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => navigateTo("/")}
          variant="h6"
          noWrap
          component="div"
        >
          RCM
        </Typography>

        {/* ! todo :- add avatar and logOut Btn  */}
        <Button sx={{ color: "white" , ml: "auto" }} onClick={()=> setDirectionHandler("rtl")}>rtl</Button>
        <Button sx={{ color: "white" }} onClick={()=> setDirectionHandler("ltr")}>ltr</Button>
        <Button sx={{ color: "white" }} onClick={()=> fetchTranslations("ar")}>ar</Button>
        <Button sx={{ color: "white" }} onClick={()=> fetchTranslations("eng")}>eng</Button>

        <ThemeToggleButton sx={ { ml:"auto" } } />
      </Toolbar>
    </AppBar>
  );
}
