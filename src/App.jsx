import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./pages/PageLayout"
import PageSignin from "./pages/PageSignIn"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes path="/" element={<Home />}>
      <Route index element={<PageSignIn />} />
      <Route path="/test" element={<PageLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App