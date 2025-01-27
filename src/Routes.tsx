import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
  </RouterRoutes>
);

export default Routes;