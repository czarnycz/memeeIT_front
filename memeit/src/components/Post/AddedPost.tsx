import { Text } from "@chakra-ui/react"
import { useState } from "react";
import usePostContext from "../../hooks/usePostContext";


export const AddedPost = () => {

    const context = usePostContext();
    const[votes,setVotes] = useState(0)

    const onVotesChanged = () =>{
        setVotes(votes + 1)
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