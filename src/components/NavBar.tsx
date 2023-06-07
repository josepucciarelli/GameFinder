import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo - GameFinder.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" m="5px" border={5} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
