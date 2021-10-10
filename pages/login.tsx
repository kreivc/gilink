import { Box, Button, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import Router from "next/router";
import { providers, getSession } from "next-auth/client";
import { NextPage } from "next";
import { signIn } from "next-auth/client";
import { NextPageContext } from "next";

const Login: NextPage = ({ providers, session }) => {
	useEffect(() => {
		if (session) return Router.push("/");
	}, [session]);

	if (session) return null;

	return (
		<Box p="20">
			<Input placeholder="email" type="email" />
			<Input placeholder="password" type="password" />
			<Box>
				<Button
					style={{ background: "brand", color: "brand.50" }}
					onClick={() => signIn(providers.id)}
				>
					Sign in with {providers.name}
				</Button>
			</Box>
		</Box>
	);
};

Login.getInitialProps = async (context: NextPageContext) => {
	return {
		providers: await providers(),
		session: await getSession(context),
	};
};

export default Login;
