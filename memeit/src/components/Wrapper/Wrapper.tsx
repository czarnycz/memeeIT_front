import { Button, Stack, useToast } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserApi } from "../../api/UserApi";
import { ACCESS_TOKEN } from "../../constants";
import useAppContext from "../../hooks/useAppContext";
import useAxios from "../../hooks/useAxios";
import "./Wrapper.css";

export const Wrapper = () => {
  const axios = useAxios();
  const context = useAppContext();
  const navigate = useNavigate();
  const toast = useToast();

  const fetchUser = useCallback(async () => {
    const uuid = localStorage.getItem("uuid")
    if (!uuid) {
      return;
    }

    const user = await UserApi.getUser(uuid);
    context.userModifier(user.data);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);



  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    context.userModifier(null);

    toast({
      title: "Zostałeś poprawnie wylogowany",
      description:
        "Dla większego bezpieczeństwa zamknij wszystkie okna przegląarki",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    navigate("/", { replace: true });
  };

  const onLogin = () => {
    navigate("/login");
  };
  const onRegister = () => {
    navigate("/register")
  }

  return (
    <div className="container">
      <div className="menu-wrapper">

        {!context.currentUser ? 
        (<>
        <Stack direction="row" spacing={2}>
        <Button colorScheme={"blue"} onClick={onRegister}>Zarejstruj</Button>
        <Button onClick={onLogin} colorScheme={"blue"}>
          Zaloguj się
        </Button>
        </Stack></>

        ) : (
          <div className="nav-logged">
            <span>
              Zalogowany jako:{" "}
              <Link to="/profile">{context.currentUser.username}</Link>
            </span>
            <Button onClick={onLogout} colorScheme={"blue"}>
              Wyloguj się
            </Button>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
