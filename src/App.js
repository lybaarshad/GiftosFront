import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Layout from "./components/basics/Layout";
import Contact from "./components/Contact";
import Purchase from "./components/Purchase";
import SignUp from "./components/basics/SignUp";
import LogIn from "./components/basics/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CheckOut/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
