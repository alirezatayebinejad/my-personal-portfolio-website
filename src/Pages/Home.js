import React from "react";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import "./Home.css";

export const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Skills />
		</div>
	);
};
