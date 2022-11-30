import { createContext, useState } from "react";
import { Comment } from "../models/Comment";

interface CommentContext {
    comment: Comment;
    commentModifier: (value: Comment) => void;

}

export const CommentContext = createContext<CommentContext>({
    comment: {
        content: "",
        votes: 0,
    },
    commentModifier: (value: Comment) => {

    },

})
export const CommentProvider = (props: React.PropsWithChildren) => {
    const [comment, setComment] = useState<Comment>({
        content: "",
        votes: 0,
    });
    const commentModifier = (value: Comment) => {
        setComment(value)
    };

    return (
        <CommentContext.Provider value={{ comment: comment, commentModifier: commentModifier }}>
            {props.children}
        </CommentContext.Provider>
    );
}