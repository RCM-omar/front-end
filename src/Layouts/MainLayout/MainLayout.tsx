import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "../../Components/layoutEntities/Header/Header";
import { useState } from "react";
import SideBar from "../../Components/layoutEntities/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  console.log(theme.direction);
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >

      <Header setOpen={setOpen} open={open} />
      <SideBar DrawerHeader={DrawerHeader} open={open} setOpen={setOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
