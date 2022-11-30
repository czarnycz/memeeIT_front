import { authorizedApi } from "../hooks/useAxios";
import { User } from "../models/User";

export class UserApi {
  static getUser = async (uuid:string) => await authorizedApi.get<User>(`/api/users/${uuid}`);
  
}
