import Head from "next/head";
import { Button, Checkbox, Input, VStack } from "@chakra-ui/react";

export default function Home() {
	const name = "Ricky Png";
	const image = name.split(" ").slice(0, -1).join(" ");
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
