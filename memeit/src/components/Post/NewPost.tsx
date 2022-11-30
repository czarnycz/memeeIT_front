import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { AuthenticationApi } from "../../api/AuthenticationApi";
import "./NewPost.css";
import { NewPostContext } from "../../hooks/NewPostContext";

export const NewPost = () => {

    const context = useContext(NewPostContext);
    const navigation = useNavigate();
    const[title,setTitle] = useState<string>("")

    // const[images, setImages] = useState([]);
    // const[imageUrls, setImageUrls] = useState([]);

    // useEffect(() => {
    //     if(images.length < 1) return;
    //     const newImageUrls = [];
    //     images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    //     setImageUrls(newImageUrls);
    // }, [images]);

    // function onImageChange(e)   {
    //     setImages([...e.target.files]);
    // }


   
    

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    };
    

    const handleSubmit = async () =>{
       
        await AuthenticationApi.savePost();
           navigation("/posts");
        }

    return(<>
    
        <div className="menu">
        <FormControl>
            <FormLabel>Tytul</FormLabel>
            <Input type='text' value={title} onChange={onTitleChanged}></Input>
            <FormLabel>załaduj zdjecie</FormLabel>
            <>
            {/* <Input type="file" multiple accept="image/*" onChange={onImageChange}></Input>
            {imageUrls.map(imageSrc => <img src={imageSrc}/> )} */}
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