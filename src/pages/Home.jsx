'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/creators")
  }

  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make Connection With <br />
            <Text as={'span'} color={'green.400'}>
              your Creators
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Unlock the power of authentic brand promotion. Connect with top content creators who bring your brand to life through engaging, original content. Discover the perfect creator to amplify your message and drive your success. Start your journey today!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }} onClick={handleGetStarted}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

