import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";

import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes (Isko hamesha TOP par rakhein taake pehle yeh check ho) */}
        <Route
          path="/admin/*"
          element={<AdminRoutes />}
        />

        {/* Public Website Routes (Bina header/footer ke conflict ke) */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/post-ad" element={<PostAd />} />
                {/* Aap chahein to yahan ek 404 page bhi daal sakte hain */}
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;