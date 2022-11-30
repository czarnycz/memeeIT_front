import { Button, Card, CardBody, CardFooter, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

export const Profile = () => {

    const navigation = useNavigate();
    const context = useAppContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <> <Card>
            <CardBody>
                <Stack mt="8" spacing="4">
                    <Heading size="md">{context.currentUser?.username}</Heading>
                    <Text size="sm">{context.currentUser?.email}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Stack direction="row" spacing={2}>
                    <Button onClick={onOpen} variant="solid" colorScheme="blue">
                        Wyświetl szczegóły
                    </Button>
                    <Button variant="solid" colorScheme="blue" onClick={()=> navigation("/addPost")}>
                        Dodaj post
                    </Button>
                    <Button variant="solid" colorScheme="blue">
                        Pokaz posty
                    </Button>
                </Stack>
            </CardFooter>
        </Card>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        Szczegóły użytkownika
                    </DrawerHeader>
                    <DrawerBody>
                        <Text fontSize="lg">
                            <b>Username: </b>
                            {context.currentUser?.username}
                        </Text>
                        <Text fontSize="lg">
                            <b>Email: </b>
                            {context.currentUser?.email}
                        </Text>
                        <Text fontSize="lg">
                            <b>First Name: </b>
                            {context.currentUser?.firstName}
                        </Text>
                        <Text fontSize="lg">
                            <b>Last Name: </b>
                            {context.currentUser?.lastName}
                        </Text>
                        <Text fontSize="lg">
                            <b>Role: </b>
                            {context.currentUser?.role}
                        </Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}