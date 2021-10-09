import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
	return (
		<Box px="5">
			<Flex justifyContent={"space-between"} alignItems={"center"} p="2">
				<Text fontSize={"2xl"}>gilink</Text>
				<Text fontWeight={"semibold"} fontSize={"2xl"} textAlign={"center"}>
					Navbar
				</Text>
			</Flex>
		</Box>
	);
}
