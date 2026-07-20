import { Outlet } from "react-router-dom";
import TopBar from "./components/topbar";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />
    </>
  );
}
