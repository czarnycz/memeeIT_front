import "./Post.css";

export const Post = () => {


    return (
        <div className="postBox">
        <div><p className="postBox-title">Meme title</p></div>
        <div><p className="postBox-meta">Posted by: SomeEpicUser</p></div>
        <div className="postBox-img">
        <img src="https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg?x34900" alt="some epic meme"></img>
        </div>
        </div>
    );
};