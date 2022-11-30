import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationApi } from "../../api/AuthenticationApi";


import { DataContext } from "../../hooks/DataContext";
import { User } from "../../models/User";
import "./RegisterForm.css";

export const RegisterForm = () => {

    
const context = useContext(DataContext);
    

    const navigation = useNavigate();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    

    const onLoginChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value)
    };
    const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
       setPassword(event.currentTarget.value)
    };
    const onFirstNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value)
    };
    const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
       setEmail(event.currentTarget.value)
    };
    const onLastNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value)
     };


    const handleSubmit = async () =>{
    await AuthenticationApi.saveUser({username:login, password:password, email:email,lastName:lastName, firstName:firstName});
       navigation("/");
    }

   

    return(<>
    
        <div className="menu">
        <FormControl>
            <FormLabel>Nazwa uzytkownika</FormLabel>
            <Input type='text' value={login} onChange={onLoginChanged}></Input>
            <FormLabel>Haslo</FormLabel>
            <Input type='text' value={password} onChange={onPasswordChanged}></Input>
            <FormLabel>Email</FormLabel>
            <Input type='text' value={email} onChange={onEmailChanged}></Input>
            <FormLabel>Imie</FormLabel>
            <Input type='text' value={firstName} onChange={onFirstNameChanged}></Input>
            <FormLabel>Nazwisko</FormLabel>
            <Input type='text' value={lastName} onChange={onLastNameChanged}></Input>
            <Stack direction="row" spacing={2}>
            <Button colorScheme='blue' onClick={handleSubmit} >Zarejestruj sie</Button>
            <Button colorScheme='blue' onClick={() => navigation('/')} >cofnij</Button>
            </Stack>
        </FormControl>
        </div>
        </>
    );
};