import { useCallback, useEffect, useState } from "react";
import { PostApi } from "../../api/PostApi";
import { Post } from "../../models/Post";

export const PostList = () =>{

    const [posts, setPosts] = useState<Post[]>([])

    const fetchPost = useCallback(async () => {
        const result = await PostApi.GetAll()
        setPosts(result.data)
    },[])

    useEffect(() => {
        fetchPost()
    },  [])


    return(
            <div>
                {posts.map(x => <div>{x.title}<img src={x.fileImage?.filePath}></img></div>)}
            </div>
    );
}