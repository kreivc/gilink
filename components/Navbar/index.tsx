import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { logoTextProps, parentContainerProps } from "./style-props";
import { useRouter } from "next/router";

type userData = {
	name?: string;
	email?: string;
};

export default function Navbar() {
	const [user, setUser] = useState<userData>({
		name: "kreivc",
		email: "email@gmail.com",
	});
	const router = useRouter();

	return (
		<Flex {...parentContainerProps}>
			<Text {...logoTextProps} onClick={() => router.push("/")}>
				gilink
			</Text>
			{!user ? (
				<Flex alignItems={"center"} gridGap={"3"}>
					<Text>Not signed in</Text>
					<Button colorScheme={"brand"} onClick={() => router.push("/login")}>
						Sign in
					</Button>
				</Flex>
			) : (
				<Flex alignItems={"center"} gridGap={"3"}>
					<Text>Signed in as {user.name}</Text>
					<Button colorScheme={"brand"} onClick={() => setUser(null)}>
						Sign out
					</Button>
				</Flex>
			)}
		</Flex>
	);
}
