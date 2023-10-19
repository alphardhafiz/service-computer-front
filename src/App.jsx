import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageSignIn from "./pages/PageSignIn";
import PageList from "./pages/PageList";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import PageBarang from "./pages/PageBarang";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/list/add" element={<PageBarang />} />
        </Route>
        
        <Route path="/signin" element={<PageSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
