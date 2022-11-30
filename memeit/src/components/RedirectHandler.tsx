import { ACCESS_TOKEN } from "../constants";
import useUrlQuery from "../hooks/useUrlQuery";
import { Navigate } from "react-router-dom";
import { useRef } from "react";

export const RedirectHandler = () => {
  const query = useRef<URLSearchParams>(useUrlQuery());

  const token = query.current.get("token");

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return <Navigate to={"/profile"} />;
  }

  return <Navigate to={"/login"} />;
};
