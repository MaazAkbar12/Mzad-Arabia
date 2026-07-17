import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";


function App() {

  return (

    <BrowserRouter basename="/Mzad-Arabia">

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
         <Route path="/post-ad" element={<PostAd />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

export default App;