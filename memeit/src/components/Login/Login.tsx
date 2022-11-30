import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationApi } from "../../api/AuthenticationApi";
import { DataContext } from "../../hooks/DataContext";

import "./Login.css";


export const Login = () => {

    const navigation = useNavigate();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onLoginChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value)
    };
    const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
       setPassword(event.currentTarget.value)
    };

    const handleSubmit = async () =>{
        const result = await AuthenticationApi.loginUser(login, password)
        localStorage.setItem("uuid", result.data.uuid);
        localStorage.setItem("jwt", result.data.token);
        navigation("/profile");
    };


    return (

        <div className="menu">
            <FormControl>
                <FormLabel>Login</FormLabel>
                <Input type='text' value={login} onChange={onLoginChanged}></Input>
                <FormLabel>Haslo</FormLabel>
                <Input type='text' value={password} onChange={onPasswordChanged}></Input>
                <Stack direction="row" spacing={2}>
                    <Button colorScheme='blue' onClick={handleSubmit} >Zaloguj sie</Button>
                    <Button colorScheme='blue' onClick={() => navigation('/')} >cofnij</Button>
                </Stack>
            </FormControl>
        </div>
    );
}