import React, { useState } from "react";
import "./Header.css";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log(isMenuOpen);
	return (
		<div className="header">
			<div className="header__logo">
				<img src="/Assets/brand/logo192.png" alt="vibracode logo" />
			</div>
			<nav className="header__navbar">
				<ul>
					<li>
						<img src="/Assets/icons/home.png" alt="" /> Home
					</li>
					<li>
						<img src="/Assets/icons/skills.png" alt="" />
						Skills
					</li>
					<li>
						<img src="/Assets/icons/projects.png" alt="" />
						Projects
					</li>
					<li>
						<img src="/Assets/icons/blog.png" alt="" />
						Blog
					</li>
					<li>
						<img src="/Assets/icons/contactme.png" alt="" />
						Contact me
					</li>
				</ul>
			</nav>
			<div className="header__burgermenu">
				<img src="/Assets/icons/burgerMenu.png" alt="burger menu icon" onClick={() => setIsMenuOpen(true)} />
			</div>
			<div className={`header__burgermenu--box ${isMenuOpen ? "menuIsOpen" : ""}`}>
				<img src="/Assets/icons/closeBtn.png" alt="close button icon" onClick={() => setIsMenuOpen(false)} />
				<ul>
					<li>item 1</li>
					<li>item 2</li>
					<li>item 3</li>
					<li>item 4</li>
				</ul>
				<p>
					this website is created with <span>❤</span> by Alireza Tayebinejad from <a href="https://www.github.com/vibracode">@vibracode</a>
				</p>
			</div>
		</div>
	);
}

export default Header;
