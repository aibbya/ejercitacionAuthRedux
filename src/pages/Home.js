import React, { useState, useEffect } from 'react'
import userIsLogged from '../utils/userIsLogged';
import { Center, Text, Link, Flex, Stack, Container } from '@chakra-ui/layout';
import { Fragment } from 'react';

const Home = () => {
    const [modo, setModo] = useState(false)

    useEffect(() => {
        setModo(userIsLogged())
    }, [modo]);

    return (
        <Container maxW="container.md" align="center">
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Center bg="purple.500" h="100px" color="white" borderRadius="lg">
                        {
                            modo ?
                                (
                                    <Text fontSize="2xl">HOLA!! SOLO ESTAS ACA PORQUE ESTAS LOGUEADO</Text>

                                )
                                :
                                (
                                    <Fragment>
                                        <Stack fontSize="2xl" p={5} >
                                        <Text>HOLA!! DEBES INICIAR SESION</Text>
                                        <Link href="/login" fontSize="2xl" color="pink.900"> Haz Click Acá</Link>
                                        </Stack>
                                    </Fragment>
                                )
                        }
                    </Center>
                </Stack>
            </Flex>
        </Container>



    )
}

export default Home
