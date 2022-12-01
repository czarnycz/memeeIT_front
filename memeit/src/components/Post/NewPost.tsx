import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { AuthenticationApi } from "../../api/AuthenticationApi";
import "./NewPost.css";
import { NewPostContext } from "../../hooks/NewPostContext";
import { PostApi } from "../../api/PostApi";
import { stringify } from "querystring";

export const NewPost = () => {

    const context = useContext(NewPostContext);
    const navigation = useNavigate();
    const[title,setTitle] = useState<string>("")

    const[images, setImages] = useState<File | null>(null);
    const[imageUrls, setImageUrls] = useState<string>("");

    useEffect(() => {
        if(!images) return;
        setImageUrls(URL.createObjectURL(images));
    }, [images]);

    function onImageChange(e:React.ChangeEvent<HTMLInputElement>)   {
       if(!e.currentTarget.files) {
        return;
       }
      setImages(e.currentTarget.files[0])
    }




   
    

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    };
    

    const handleSubmit = async () =>{
       if(!images) return;
        await PostApi.savePost({title:title, fileImage:{name:images.name, type:images.type, filePath:images.}});
           navigation("/posts");
        }

    return(<>
    
        <div className="menu">
        <FormControl>
            <FormLabel>Tytul</FormLabel>
            <Input type='text' value={title} onChange={onTitleChanged}></Input>
            <FormLabel>załaduj zdjecie</FormLabel>
            <>
            <Input type="file" accept="image/*" onChange={onImageChange}></Input>
            <img src={imageUrls}/> 
            </>
           <Stack direction="row" spacing={2}>
            <Button colorScheme='blue' onClick={handleSubmit} >Dodaj post</Button>
            <Button colorScheme='blue' onClick={() => navigation('/profile')} >cofnij</Button>
            </Stack>
        </FormControl>
        </div>
        </>
    );
}