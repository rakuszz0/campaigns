import React from "react";
import { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function PrivateRoute(props) {

  const [state, dispatch] = useContext(UserContext);

  return state.user.list_as_role == "Admin" ? <Outlet /> : <Navigate to="/" />;
}