import { Outlet } from "react-router";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <section>
      <Menu />
      <main>
        <Outlet />
      </main>

      <Footer />
    </section>
  );
}
