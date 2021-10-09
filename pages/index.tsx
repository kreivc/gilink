import Head from "next/head";
import { Box, Button, Checkbox, Input, VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<div>
			<Head>
				<title>GiLink</title>
				<meta name="description" content="Welcome to GiLink" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<VStack textAlign={"center"} p="20">
				<Button colorScheme={"brand"} w="50%">
					Test
				</Button>
				<Checkbox defaultIsChecked>Checkbox</Checkbox>
				<Input placeholder="Testing" />
			</VStack>
		</div>
	);
}
