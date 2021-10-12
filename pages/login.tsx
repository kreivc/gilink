import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Router from "next/router";
import { getSession, csrfToken } from "next-auth/client";
import { signIn } from "next-auth/client";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

export interface LoginProps {
	session: Session;
	csrfToken: string;
}

function Login({ session, csrfToken }: LoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// console.log(session, csrfToken);

	useEffect(() => {
		if (session) {
			Router.push("/");
		}
	}, [session]);

	const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		const res = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (res.error) {
			if (res.error === "Success! Check your email.") {
				signIn("email", { email: email });
				console.log("success");
			}
			console.log("err");
		}

		Router.push("/");
	};

	return (
		<Box maxWidth="container.xl">
			<Box p="5">
				<Box as="form" maxWidth="container.sm" onSubmit={handleSubmit}>
					<Input type="hidden" name="csrfToken" defaultValue={csrfToken} />

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

					<Button type="submit" colorScheme="brand">
						Sign in with
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			session: await getSession(context),
			csrfToken: await csrfToken(context),
		},
	};
}

export default Login;
