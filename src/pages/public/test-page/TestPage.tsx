import { useNavigate } from "react-router-dom";
import AppTheme from "../../shared-theme/AppTheme";
import { Button, CssBaseline, Typography, Box } from "@mui/material";
import SideMenuResponsive from "../../layouts/menu/side-menu-responsive/SideMenuResponsive"

export function TestPage(props: { disableCustomTheme?: boolean }) {
  const navigate = useNavigate();

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>

        <SideMenuResponsive />
        
      </Box>
    </AppTheme>
  );
}
