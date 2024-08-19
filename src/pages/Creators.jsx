import {
  Box,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GiSettingsKnobs } from "react-icons/gi";
import { useContext, useState } from "react";
import { CreatorsContext } from "../context/ContextProvider";

const Creators = () => {
  const { creators } = useContext(CreatorsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");


  const filteredCreators = creators.filter((creator) => {
    const searchableFields = {
      all: [creator.education, creator.languages.join(", "), creator.specialization, creator.description].join(" "),
      education: creator.education,
      language: creator.languages.join(", "),
      specialization: creator.specialization,
    };

    return searchableFields[filterType].toLowerCase().includes(searchQuery.toLowerCase());
  });


  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <Box>
        <Flex p={5} justifyContent={"center"} alignItems={"center"} gap={5} flexWrap="wrap">
          <InputGroup maxW="400px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="grey" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Creators"
              border="2px solid orangeRed"
              borderRadius="30px"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<GiSettingsKnobs />}
              border="2px solid orangeRed"
              borderRadius="50%"
              aria-label="Filter"
            />
            <MenuList>
              <MenuItem onClick={() => setFilterType("education")}>By Education</MenuItem>
              <MenuItem onClick={() => setFilterType("language")}>By Language</MenuItem>
              <MenuItem onClick={() => setFilterType("specialization")}>By Specialization</MenuItem>
              <MenuItem onClick={() => setFilterType("all")}>Show All</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          p={5}
        >
          {filteredCreators.map((creator) => (
            <Box
              key={creator.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              
              cursor="pointer"
              bg={cardBg}
            >
              <Box
                height="200px"
                bgImage={`url(${creator.bannerImage})`}
                bgSize="cover"
                bgPosition="center"
              />
              <Box p={6} color={textColor}>
                <Text fontWeight="bold" fontSize="xl" isTruncated mb={2}>
                  {creator.name}
                </Text>
                <Text fontSize="md" mb={1}>
                  <strong>Education:</strong> {creator.education}
                </Text>
                <Text fontSize="md" mb={1}>
                  <strong>Languages:</strong> {creator.languages.join(", ")}
                </Text>
                <Text fontSize="md" mb={1}>
                  <strong>Specialization:</strong> {creator.specialization}
                </Text>
                <Text fontSize="md">
                  <strong>Description:</strong> {creator.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Creators;
