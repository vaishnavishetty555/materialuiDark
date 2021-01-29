import React, { useState } from "react";
import { Switch, Button, Grid, Paper, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
export default function App() {
  const [Dark, setDark] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: green,
      secondary: purple
    }
  });
  return (
    <ThemeProvider theme={Dark ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App</Typography>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
          <Switch checked={Dark} onChange={() => setDark(!Dark)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
