import { Text } from "@chakra-ui/react"
import { useState } from "react";
import { PostApi } from "../../api/PostApi";
import usePostContext from "../../hooks/usePostContext";

interface AddedPostProps{
    id:number;
    title: string;
}

export const AddedPost = (props: AddedPostProps) => {

    const context = usePostContext();
    // const[votes,setVotes] = useState(0)

    const onVotesChanged =async () =>{
        await PostApi.PostVote(props.id)
        
    }

    return (
        <>

            <Text fontSize="lg">
                <b>Tytul : </b>
                {context.post.title}
            </Text>
            <button onClick={onVotesChanged}>Polub</button>




        </>
    )
}