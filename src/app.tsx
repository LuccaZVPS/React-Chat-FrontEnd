import Login from "./pages/login";
import { GlobalStyle } from "./styles/globalStyle";
import { Theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Register from "./pages/register";
import Chat from "./pages/chat";
import ModalContext from "./contexts/modalContext";
import UserContext from "./contexts/userContext";
export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <ModalContext>
          <UserContext>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Chat />} />
              </Routes>
              <GlobalStyle />
            </BrowserRouter>
          </UserContext>
        </ModalContext>
      </ThemeProvider>
    </>
  );
}
