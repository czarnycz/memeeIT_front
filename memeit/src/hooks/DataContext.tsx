import React, { createContext, useState } from "react";
import { User } from "../models/User";

interface DataContext {
    user: User;
    userModifier: (value: User) => void;
  
  }

export const DataContext = createContext<DataContext>({
    user: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      role: "USER",
    },
    userModifier: (value: User) => {
  
    },
  
  })

  export const DataContextProvider = (props:React.PropsWithChildren) => {
    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        role: "USER",
      });
      const userModifier = (value: User) => {
        setUser(value)
      };
      return(
            <DataContext.Provider value={{user:user, userModifier:userModifier}}>
                {props.children}
            </DataContext.Provider>
      );
  }

  

  

  