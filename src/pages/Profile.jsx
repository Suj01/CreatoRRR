import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [profile, setProfile] = useState({
    name: 'Lindsey James',
    email: 'lindsey@example.com',
    username: '@lindsey_jam3s',
    description: 'Actress, musician, songwriter and artist. PM for work inquiries or #tag me in your posts',
    education: 'Bachelor of Arts in Music',
    bannerImage:
      'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    tags: ['art', 'photography', 'music'],
  });

  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTempProfile({ ...tempProfile, [id]: value });
  };

  const handleSave = () => {
    setProfile({ ...tempProfile });
    onClose();
  };

  const bgColor = useColorModeValue('white', 'gray.900');
  const tagBgColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.400');
  const secondaryTextColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Center py={8} minH="calc(100vh - 60px)" px={4}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '80%' }}
        h={{ sm: 'auto', md: '90%' }}
        direction={{ base: 'column', md: 'row' }}
        bg={bgColor}
        boxShadow={'2xl'}
        padding={8}
        position="relative">
        <IconButton
          icon={<EditIcon />}
          aria-label="Edit Profile"
          size="sm"
          position="absolute"
          top={2}
          right={2}
          onClick={onOpen}
        />
        <Flex flex={1} bg="blue.200" h="100%">
          <Image
            objectFit="cover"
            w="100%"
            h="100%"
            src={profile.bannerImage}
            alt="Profile Banner"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          spacing={6}>
          <Heading fontSize={'3xl'} fontFamily={'body'}>
            {profile.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {profile.username}
          </Text>
          <Text
            textAlign={'center'}
            color={textColor}
            px={3}>
            {profile.description}
          </Text>
          <Text
            textAlign={'center'}
            color={secondaryTextColor}
            px={3} mt={2}>
            Education: {profile.education}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6} color={"grey"}>
            {profile.tags.map((tag, index) => (
              <Badge
                key={index}
                px={2}
                py={1}
                bg={tagBgColor}
                fontWeight={'400'}>
                #{tag}
              </Badge>
            ))}
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'lg'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'lg'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={tempProfile.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email" mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={tempProfile.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="username" mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={tempProfile.username}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="description" mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={tempProfile.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="education" mt={4}>
              <FormLabel>Education</FormLabel>
              <Input
                type="text"
                value={tempProfile.education}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}