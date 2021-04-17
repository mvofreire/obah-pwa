import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
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
          <ConfigProvider componentSize="large" space={{ size: "middle" }}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ConfigProvider>
        </AppContextProvider>
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
