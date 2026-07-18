import { HashRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter ko HashRouter se badla

import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";

import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    // HashRouter ke saath basename ki zaroorat nahi hoti, yeh automatic handle ho jata hai
    <Router>
      <Routes>
        {/* Website Routes */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/post-ad" element={<PostAd />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={<AdminRoutes />}
        />
      </Routes>
    </Router>
  );
}

export default App;