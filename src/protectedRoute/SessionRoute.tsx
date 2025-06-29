import { Navigate, Outlet } from "react-router-dom";
import { User } from "../contexts/interfaces/users.interfaces";

export function SessionRoute() {

  const session = sessionStorage.getItem("user");
  const userSession: User | null = session ? JSON.parse(session) : null;

  if (userSession) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}