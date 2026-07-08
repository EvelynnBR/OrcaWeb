import { Route, Routes } from "react-router";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Estimate from "../pages/Estimate";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/orcamento" element={<Estimate />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
