import NextAuth, { User } from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const user: User = {
					email: credentials.email,
				};
				if (user) {
					console.log(user);
					return user;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: "/login",
		error: "/login",
	},

	database: process.env.DATABASE_URL,
	callbacks: {
		session: async (session, user) => {
			session.userId = user.sub;
			return Promise.resolve(session);
		},
	},
});
