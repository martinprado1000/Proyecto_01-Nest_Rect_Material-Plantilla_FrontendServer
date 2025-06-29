// src/layouts/PrivateLayout.tsx
import React from "react";
import SideMenu from "../pages/layouts/menu/side-menu/SideMenu"; // Ajustá el path
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

export const TypeMenuRoute = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};