import React, { Suspense } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import LinearProgressLoader from "./components/common/loader/LinearProgress";

import theme from "./theme";
import Routes from "./routes";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LinearProgressLoader />}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
