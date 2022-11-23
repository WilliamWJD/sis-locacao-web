import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <SignIn />
    </>
  )
}