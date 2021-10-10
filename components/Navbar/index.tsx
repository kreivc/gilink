import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { logoTextProps, parentContainerProps } from "./style-props";
import { signIn, signOut, useSession } from "next-auth/client";

function Session() {
	const [session, loading] = useSession();

	return (
		<>
			{!session ? (
				<Flex alignItems={"center"} gridGap={"3"}>
					<Text>Not signed in</Text>
					<Button colorScheme={"brand"} onClick={() => signIn()}>
						Sign in
					</Button>
				</Flex>
			) : (
				<Flex alignItems={"center"} gridGap={"3"}>
					<Text>Signed in as {session.user.name}</Text>
					<Button colorScheme={"brand"} onClick={() => signOut()}>
						Sign out
					</Button>
				</Flex>
			)}
		</>
	);
}

export default function Navbar() {
	return (
		<Flex {...parentContainerProps}>
			<Text {...logoTextProps}>gilink</Text>
			<Text>
				<Session />
			</Text>
		</Flex>
	);
}
