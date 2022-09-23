import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero" id="hero1">
			<div className="hero__info">
				<h2>hi, I'm</h2>
				<h1>Alireza Tayebinejad</h1>
				<h4>
					<span>I'm a web developer</span> interested in learning and thinking to solve problems <br /> by turning ideas to reality
				</h4>
				<div className="info__socials">
					<div>
						<a href="https://github.com/vibracode">
							<img src="/Assets/icons/github.png" alt="github icon" />
							github
						</a>
						<a href="https://www.linkedin.com/in/alireza-tayebinejad">
							<img src="/Assets/icons/linkedin.png" alt="linkedin icon" />
							linkedin
						</a>
					</div>
					<div>
						<a href="https://mailto:alirezatayebinejad@gmail.com">
							<img src="/Assets/icons/gmail.png" alt="gmail icon" />
							gmail
						</a>
						<a href="https://wa.me/989019280211">
							<img src="/Assets/icons/whatsapp.png" alt="whatsapp icon" />
							whatsapp
						</a>
					</div>
				</div>
			</div>
			<div className="hero__image">
				<img src="/Assets/brand/myProfile.jpg" alt="" />
			</div>
		</div>
	);
};

export default Hero;
