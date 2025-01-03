import Navbar from "./navbar";
import Footer from "./footer";
import Homepage from "../../pages/hompage";
import AboutPage from "../../pages/aboutpage";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
