import * as React from "react";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AppTheme from "../../shared-theme/AppTheme";
import Header from "../../layouts/header/Header";
import NavbarMenu from "../../layouts/menu/navbar-menu/NavbarMenu";
import SideMenu from "../../layouts/menu/side-menu/SideMenu";
import ProfileMainGrid from "./components/ProfileMainGrid";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Profile(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>

        {/* -------- Menu lateral -------------------------------------------------------------------------------------- */}
        {/* <SideMenu /> */}  {/* Se carga desde app */} 

        {/* -------- Menu responsivo ----------------------------------------------------------------------------------- */}
        {/* <NavbarMenu /> */}  {/* Se carga desde app */} 

        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* -------- Menu superior ---------------------------------------------------------------------------------- */}
            <Header />

            {/* -------- Body ------------------------------------------------------------------------------------------- */}
            <ProfileMainGrid />

          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
