import { createContext, useState } from "react";
import { Post } from "../models/Post";

interface NewPostContext {
    post: Post;
    postModifier: (value: Post) => void;

}

export const NewPostContext = createContext<NewPostContext>({
    post: {
        title: "",
        votes: 0,
    },
    postModifier: (value: Post) => {

    },

})
export const PostProvider = (props: React.PropsWithChildren) => {
    const [post, setPost] = useState<Post>({
        title: "",
        votes: 0,
    });
    const postModifier = (value: Post) => {
        setPost(value)
    };

    return (
        <NewPostContext.Provider value={{ post: post, postModifier: postModifier }}>
            {props.children}
        </NewPostContext.Provider>
    );
}