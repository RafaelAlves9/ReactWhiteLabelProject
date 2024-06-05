import RoutesApp from "./routes/RoutesApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading/loading";
import { useEffect } from "react";
import { handleRefreshToken } from "@utils/handleStatusResponse";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@extensions/styles";

const App = () => {

  useEffect(() => {
    const fortyMinutesInMilliseconds = 10 * 60 * 1000;
    const intervalId = setInterval(handleRefreshToken, fortyMinutesInMilliseconds);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loading />
        <ToastContainer />
        <RoutesApp />
      </ThemeProvider>
    </>
  );
};

export default App;
