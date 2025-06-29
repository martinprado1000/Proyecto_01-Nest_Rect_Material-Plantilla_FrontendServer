import { useNavigate } from "react-router-dom";
import AppTheme from "../../shared-theme/AppTheme";
import { Button, CssBaseline, Typography } from "@mui/material";

export function ErrorPage(props: { disableCustomTheme?: boolean }) {
  const navigate = useNavigate();

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <div className="container mt-5">
        <Typography variant="h2">ErrorPage: URL not found</Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{  mt: 3 }}
          onClick={() => navigate("/")}
        >
          Return to the home page
        </Button>
      </div>
    </AppTheme>
  );
}
