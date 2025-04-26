import { darkLogo } from "@/data/images";
import { Container } from "./Container";
import FooterBanner from "./FooterBanner";
import { footerLinks } from "@/routes";

export default function Footer() {
	return (
		<Container mediaquery="xl:w-9/12 pt-32 pb-4">
			<FooterBanner />
			<footer className="font-osans mt-20 mb-10 md:mb-20 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2.4fr_1fr_1fr_1fr]">
				<aside className="flex flex-col gap-y-8">
					<a href="#" title="Boldo" className="w-max">
						<figure role="img" className="max-w-28">
							<img src={darkLogo} alt={darkLogo} />
						</figure>
					</a>
					<div className="w-full sm:w-5/6 sm:text-balance text-[#777777] leading-6 text-[.95rem] font-normal">
						<p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
					</div>
					<div className="mt-auto text-[#777777] text-[.96rem]">
						<p>All rights reserved</p>
					</div>
				</aside>
				{footerLinks.length &&
					footerLinks.map((eachLink, index) => {
						return (
							<aside key={index} className="flex flex-col gap-y-8">
								<header>
									<h5 className="text-base font-bold">{eachLink.sublinkTitle}</h5>
								</header>
								<ul className="flex flex-col gap-y-6">
									{eachLink.links.length &&
										eachLink.links.map((sublink, sublinkIndex) => (
											<li key={sublinkIndex}>
												<a href={sublink.route} className="text-[#777777] text-[.96rem] v-link">
													{sublink.title}
													{sublink?.hasBadge && (
														<span className="text-primary bg-[#65E4A3] rounded-full text-[.85rem] py-1 px-2 font-bold ml-2">{sublink.badgeText}</span>
													)}
												</a>
											</li>
										))}
								</ul>
							</aside>
						);
					})}
			</footer>
		</Container>
	);
}
