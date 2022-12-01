import axios from "axios";
import { authorizedApi } from "../hooks/useAxios";
import { Post } from "../models/Post";

export class PostApi{
    static PostVote = async (id:number) => await authorizedApi.post(`/posts/vote/${id}`) 
    static GetAll = async () => await authorizedApi.get<Post[]>("/posts")
    static savePost = async (post: Post) => await authorizedApi.post<Post>("/api/posts", );
}