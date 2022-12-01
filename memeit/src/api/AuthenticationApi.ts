import axios from "axios";
import { stringify } from "querystring";
import { authorizedApi } from "../hooks/useAxios";
import { Post } from "../models/Post";
import { User } from "../models/User";

export class AuthenticationApi {
    static loginUser = async (login: string, password: string) => await axios.post("/auth/login", { username: login, password: password });
    static saveUser = async (user: User) =>
     await axios.post<User>("/auth/register", user);
    
}