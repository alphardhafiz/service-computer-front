import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageSignIn from "./pages/PageSignIn";
import PageList from "./pages/PageList";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import PageBarang from "./pages/PageBarang";
import PageEdit from "./pages/PageEdit";
import PageListCustomer from "./pages/PageListCustomer";
import PageContact from "./pages/PageContact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/barangCustomer/:noHp" element={<PageListCustomer />} />
          <Route path="/contact" element={<PageContact />} />
        </Route>
          <Route path="/list/add" element={<PageBarang />} />
          <Route path="/list/edit/:id" element={<PageEdit />} />
        <Route path="/signin" element={<PageSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
