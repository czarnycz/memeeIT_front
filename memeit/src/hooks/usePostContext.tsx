import { useContext } from "react";
import { NewPostContext } from "./NewPostContext";

const usePostContext = () => {
    const context = useContext(NewPostContext);
  
    return context;
  };
  
  export default usePostContext;
  