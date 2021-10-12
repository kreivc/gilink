import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { logoTextProps, parentContainerProps } from "./style-props";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

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
					<Text>Signed in as {session.user.email}</Text>
					<Button colorScheme={"brand"} onClick={() => signOut()}>
						Sign out
					</Button>
				</Flex>
			)}
		</>
	);
}

export default function Navbar() {
	const router = useRouter();
	return (
		<Flex {...parentContainerProps}>
			<Text {...logoTextProps} onClick={() => router.push("/")}>
				gilink
			</Text>
			<Session />
		</Flex>
	);
}
