import React from "react";
import { logo } from "@/data/images";
import { navlinks } from "@/routes";
import { useMenu } from "@/hooks";

const Header = () => {
	const { stateData, toggleMenu, closeMenu, openMenu } = useMenu();

	return (
		<header className="fixed top-0 right-0 left-0 px-6 flex font-osans items-center justify-between pt-5 md:pt-8 pb-8 xl:w-full mx-auto xl:relative z-[100]">
			<a href="#">
				<figure className="max-w-32">
					<img src={logo} alt={logo} className="" />
				</figure>
			</a>
			<nav className="hidden lg:flex items-center justify-end gap-x-10">
				{navlinks.map((link, index) => (
					<a
						href={link.route}
						key={index}
						className={`text-[.99rem] font-medium tracking-wide text-white transition-color ease-in-out duration-300 opacity-100 v-link`}>
						{link.title}
					</a>
				))}
				<a
					href="#"
					className="font-bold font-osans rounded-full text-[.99rem] py-2.5 px-10 bg-white transition-all ease-in-out duration-300 hover:bg-sec">
					Log In
				</a>
			</nav>
			<button
				type="button"
				className="relative gap-y-1 items-center flex lg:hidden justify-center text-white w-8 h-8 transition-all hover:text-sec duration-300 ease-in-out"
				onClick={toggleMenu}>
				{stateData.isSidebarOpen ? (
					<svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 16 16">
						<path
							fill="currentColor"
							fillRule="evenodd"
							d="M4.15 4.15a.5.5 0 0 1 .707 0l3.15 3.15l3.15-3.15a.5.5 0 0 1 .707.707l-3.15 3.15l3.15 3.15a.5.5 0 0 1-.707.707l-3.15-3.15l-3.15 3.15a.5.5 0 0 1-.707-.707l3.15-3.15l-3.15-3.15a.5.5 0 0 1 0-.707"
							clipRule="evenodd"
							strokeWidth={0.5}
							stroke="currentColor"></path>
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15h18M3 9h18"></path>
					</svg>
				)}
			</button>
		</header>
	);
};

export default Header;
