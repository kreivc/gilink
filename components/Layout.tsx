import React from "react";
import Navbar from "./Navbar";

type Layout = {
	children: React.ReactNode;
};

export default function Layout({ children }: Layout) {
	return (
		<div className="container">
			<Navbar />
			{children}
		</div>
	);
}
