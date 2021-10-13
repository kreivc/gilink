import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();

		const { data } = await axios.post("/api/auth/register", {
			name,
			email,
			password,
		});
		console.log(data);

		Router.push("/");
	};

	return (
		<Box maxWidth="container.xl">
			<Box p="5">
				<Box as="form" maxWidth="container.sm" onSubmit={handleSubmit}>
					<FormControl id="name">
						<FormLabel>Name</FormLabel>
						<Input
							isRequired
							type="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</FormControl>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input
							isRequired
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input
							isRequired
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>

					<Button type="submit" colorScheme="brand" mt="3">
						Register
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Register;
