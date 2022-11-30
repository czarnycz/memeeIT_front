import { Post } from "./Post";

export type PostContextType = {
    currentPost: Post | null;
    postModifier: (user: Post | null) => void;
  };
  