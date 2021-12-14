import React from "react";
import { Box, InputGroup, InputLeftElement, Input, Container, HStack, Image, IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { FaSearch, FaBars } from "react-icons/fa";

import Logo from "../assets/images/logo.jpg";
import Text from "./atoms/Text";

const NavigationBar = React.memo(() => {
  return (
    <Container flex={1} maxW="container.xl" h={{ base: "70px", sm: "80px" }}>
      <HStack py={2}>
        {/* Icon Drawer */}
        <Box flex={1} maxW={{ base: '15px', md: '100%' }} display={{ base: "block", sm: "none" }}>
          <IconButton
            aria-label='Drawer trigger'
            size="sm"
            outlineOffset={0}
            bgColor="transparent"
            border="none"
            icon={<Icon as={FaBars} color="gray.500" />}
            _active={{
              border: "none",
              bgColor: "transparent"
            }}
            _focus={{
              boxShadow: "none",
              bgColor: "transparent"
            }}
          />
        </Box>
        {/* Search Input */}
        <Box flex={1} display={{ base: "none", sm: "block" }}>
          <InputGroup size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.500" />}
            />
            <Input borderRadius={0} size="sm" type="tel" placeholder="Phone number" />
          </InputGroup>
        </Box>
        {/* Logo */}
        <Box flex={{ base: 2, sm: 1 }} py={2}>
          <Image h={{ base: "45px", sm: "50px" }} mx={{ base: "0", sm: "auto" }} src={Logo} />
        </Box>
        {/* Menu */}
        <HStack flex={1}>
          <Text>Nice</Text>
          <Text>Nice 2</Text>
        </HStack>
        {/* <Box flex={1} display={{ sm: "none" }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} w={{ base: "100%", sm: "0" }} color="gray.500" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </Box> */}
      </HStack>
    </Container>
  );
})

export default NavigationBar;