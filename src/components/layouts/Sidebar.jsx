import React from "react";
import { navlinks } from "@/routes";
import { useMenu } from "@/hooks";

export default function Sidebar() {
	const { stateData } = useMenu();
	return (
		<aside
			className={`${
				stateData.isSidebarOpen ? "is-active-sb translate-x-0" : "translate-x-full"
			} bg-primary fixed transition-all duration-300 ease-in-out overflow-hidden inset-0 h-screen w-full z-[99] px-6 pt-[80px] pb-5 shadow-2xl`}>
			<ul className="h-full flex flex-col">
				{navlinks.map((link, index) => {
					return (
						<li key={index} className="last:border-0 border-b border-white/40">
							<a
								href={link.link}
								className="text-xl font-medium hover:text-sec transition-all ease-in-out duration-300 font-manrope text-white py-6 block">
								{link.title}
							</a>
						</li>
					);
				})}
				<li className="mt-auto">
					<a
						href="#"
						className="bg-transparent rounded-lg border-2 border-solid hover:text-sec transition-all ease-in-out duration-300 hover:border-sec border-white/50 block text-center py-5 text-white text-xl font-osans">
						Log in
					</a>
				</li>
			</ul>
		</aside>
	);
}
