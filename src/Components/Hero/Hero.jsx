import "./Hero.css";
import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__info">
				<h2>hi, I'm</h2>
				<h1>Alireza Tayebinejad</h1>
				<h4>
					I'm a web developer interested in learning and thinking to solve problems <br /> by turning ideas to reality
				</h4>
			</div>
			<div className="hero__image">
				<img src="/Assets/brand/myProfile.jpg" alt="" />
			</div>
		</div>
	);
};

export default Hero;
