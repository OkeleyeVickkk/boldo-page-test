import React from "react";
import { logo } from "@/data/images";
import { navlinks } from "@/routes";

const Header = () => {
	return (
		<header className="flex font-osans items-center justify-between pt-5 md:pt-8 pb-8 w-full mx-auto relative z-[1]">
			<a href="#">
				<figure className="max-w-32">
					<img src={logo} alt={logo} className="" />
				</figure>
			</a>
			<nav className="hidden xl:flex items-center justify-end gap-x-10">
				{navlinks.map((link, index) => (
					<a
						href={link.route}
						key={index}
						className={`text-[.99rem] font-medium tracking-wide text-white transition-color ease-in-out duration-300 opacity-100`}>
						{link.title}
					</a>
				))}
				<a href="#" className="font-bold font-osans rounded-full text-[.99rem] py-2.5 px-10 bg-white">
					Log In
				</a>
			</nav>
		</header>
	);
};

export default Header;
