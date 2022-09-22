import React from "react";
import ContactMe from "../Components/ContactMe/ContactMe";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import "./Home.css";

export const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Skills />
			<Projects />
			<ContactMe />
		</div>
	);
};
