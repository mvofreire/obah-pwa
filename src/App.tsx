import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppContextProvider, useAppContext } from "contexts/app.context";
import { ThemeProvider } from "@material-ui/styles";
import PrivateContainer from "containers/private";
import PublicContainer from "containers/public";
import theme from "./theme-variables";
import "./App.less";

const queryClient = new QueryClient();
function AppContainer() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AppContextProvider>
        <ReactQueryDevtools initialIsOpen={false} position="top-right" />
      </QueryClientProvider>
    </Router>
  );
}

function App() {
  const { session } = useAppContext();
  return (
    <>
      {!!session && <PrivateContainer />}
      {!session && <PublicContainer />}
    </>
  );
}

export default AppContainer;
