import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { useState } from "react";
import Router from "next/router";
import router from "next/router";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();

		Router.push("/");
	};

	return (
		<Box maxWidth="container.xl">
			<Box p="5">
				<Box as="form" maxWidth="container.sm" onSubmit={handleSubmit}>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>
					<Flex gridGap={3} mt="3">
						<Button type="submit" colorScheme="brand">
							Login
						</Button>
						<Button
							type="submit"
							colorScheme="brand"
							onClick={() => router.push("/register")}
						>
							Register
						</Button>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}

export default Login;
