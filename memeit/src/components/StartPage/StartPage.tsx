import "./StartPage.css";
import { Post } from "../Post/Post";
import "../../index.css";
import useAppContext from "../../hooks/useAppContext";


export const StartPage = () => {
    const context = useAppContext();

    return (
        <div className="start-page-container">
            <h1>MemeIT</h1>
            <h5>Twoje miejsce z codzienną dawką programistycznego humoru</h5>

            <Post></Post>
        </div>
    );
};
