import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/common/ScrollToTop";
function AppRoutes() {
  return (
    <BrowserRouter>
      {" "}
      <ScrollToTop />{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/projects/:slug" element={<ProjectDetails />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default AppRoutes;
