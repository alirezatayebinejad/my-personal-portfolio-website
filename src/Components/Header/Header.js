import React, { useState } from "react";
import "./Header.css";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="header">
			<div className="header__burgermenu">
				<img src="/Assets/icons/burgerMenu.png" alt="burger menu icon" onClick={() => setIsMenuOpen(true)} />
			</div>
			<div className={`header__burgermenu--box ${isMenuOpen ? "menuIsOpen" : ""}`}>
				<img className="header__burgermenu__icon" src="/Assets/icons/closeBtn.png" alt="close button icon" onClick={() => setIsMenuOpen(false)} />
				<ul>
					<a href="#hero1">
						<li>
							<img src="/Assets/icons/home.png" alt="" />
							Home
						</li>
					</a>
					<a href="#skills1">
						<li>
							<img src="/Assets/icons/skills.png" alt="" />
							Skills
						</li>
					</a>
					<a href="#projects1">
						<li>
							<img src="/Assets/icons/projects.png" alt="" />
							Projects
						</li>
					</a>
					<a href="#blogposts1">
						<li>
							<img src="/Assets/icons/blog.png" alt="" />
							Blog
						</li>
					</a>
					<a href="#contactme1">
						<li>
							<img src="/Assets/icons/contactme.png" alt="" />
							Contact me
						</li>
					</a>
				</ul>
				<p>
					this website is created with <span>❤</span> by Alireza Tayebinejad from <a href="https://www.github.com/vibracode">@vibracode</a>
				</p>
			</div>
			<nav className="header__navbar">
				<ul>
					<a href="#hero1">
						<li>
							<img src="/Assets/icons/home.png" alt="" />
							Home
						</li>
					</a>
					<a href="#skills1">
						<li>
							<img src="/Assets/icons/skills.png" alt="" />
							Skills
						</li>
					</a>
					<a href="#projects1">
						<li>
							<img src="/Assets/icons/projects.png" alt="" />
							Projects
						</li>
					</a>
					<a href="#blogposts1">
						<li>
							<img src="/Assets/icons/blog.png" alt="" />
							Blog
						</li>
					</a>
					<a href="#contactme1">
						<li>
							<img src="/Assets/icons/contactme.png" alt="" />
							Contact me
						</li>
					</a>				</ul>
			</nav>
			<div className="header__logo">
				<img src="/Assets/brand/logo192.png" alt="vibracode logo" />
			</div>
		</div >
	);
}

export default Header;
