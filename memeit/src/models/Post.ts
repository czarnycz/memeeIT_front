import { FileImage } from "./FileImage";
import { User } from "./User";

export interface Post{
    author?: User;
    title: string;
    votes: number;
    fileImage?: FileImage;
    
}