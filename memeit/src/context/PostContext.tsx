import { createContext, useState } from "react";
import { Post } from "../models/Post";
import { PostContextType } from "../models/PostContextType";

const defaultSettings: PostContextType = {
    currentPost: null,
    postModifier: (post: Post | null) => {},
  };
  
  export const PostContext = createContext<PostContextType>(defaultSettings);
  
  export const PostContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
  
    const postModifier = (post: Post | null) => {
      setCurrentPost(post);
    };
  
    return (
      <PostContext.Provider value={{ currentPost, postModifier }}>
        {children}
      </PostContext.Provider>
    );
  };
  
  export default PostContext;
  