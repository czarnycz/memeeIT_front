import { ACCESS_TOKEN } from "../constants";
import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};
