import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/navigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
