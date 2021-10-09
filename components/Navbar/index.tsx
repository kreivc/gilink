import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { flex1 } from "./NavbarProps";

export default function Navbar() {
	return (
		<Box px="5">
			<Flex {...flex1}>
				<Text fontSize={"2xl"}>gilink</Text>
				<Text fontWeight={"semibold"} fontSize={"2xl"} textAlign={"center"}>
					Navbar
				</Text>
			</Flex>
		</Box>
	);
}
