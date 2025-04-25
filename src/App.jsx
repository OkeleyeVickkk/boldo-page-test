import React from "react";
import { Container } from "./components/layouts/Container";
import Footer from "./components/layouts/Footer";
import { leadershipTeam, mobileImages, ourValues } from "./data";
import { hImg1, hImg2, hImg3, hImg4, hImg5 } from "./data/images";
import SimpleParallax from "simple-parallax-js";
import ScrollReveal from "./components/animations/ScrollReveal";
import ScrollFloat from "./components/animations/ScrollFloat";
import VariableProximity from "./components/animations/VariableProximity";
import TrueFocus from "./components/animations/TrueFocus";
import { Gallery } from "./components/layouts/Gallery";
import ScrollVelocity from "./components/animations/ScrollVelocity";

const Header = React.lazy(() => import("@/components/layouts/Header"));

function App() {
	const proximityContainerRef = React.useRef(null);

	return (
		<SimpleParallax scale={1.25}>
			<div className="bg-white scale-80 relative isolate flex flex-col">
				<section className="min-h-[90dvh] overflow-hidden bg-primary">
					<Container mediaquery="xl:w-11/12">
						<Header />
						<div className="mt-10">
							<div className="flex text-center items-center flex-col gap-y-6 text-white lg:w-10/12 xl:w-7/12 mx-auto">
								<div className="font-osans text-[17px] tracking-wider text-[#F1F1F1]">
									<span>About</span>
								</div>
								<div className="font-manrope">
									<h1 className="text-4xl md:text-[64px] md:leading-20 relative" ref={proximityContainerRef}>
										We love to make great things, things that matter.
									</h1>
								</div>
								<div className="font-osans w-11/12 mx-auto leading-8 mt-2 text-[#F1F1F1]">
									<p>
										Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment
										non-disclosure.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
				<section className="z-10">
					<Container mediaquery="w-full !px-0 sm:!px-3 xl:w-10/12 z-10 -mt-32 xl:-mt-20">
						<Gallery />
					</Container>
					<Container mediaquery="xl:w-9/12 py-20">
						<section className="xl:w-7/10 mx-auto flex flex-col gap-y-4">
							<div>
								<span className="text-osans text-[#777777] text-[17px]">Our Story</span>
							</div>
							<div>
								<h3 style={{ wordBreak: "break-all" }} className="text-[clamp(1.8rem,4vw,3rem)] font-manrope lg:leading-[72px]">
									<ScrollFloat
										animationDuration={1}
										ease="back.inOut(2)"
										scrollStart="center bottom+=50%"
										scrollEnd="bottom bottom-=40%"
										stagger={0.03}>
										Handshake infographic mass market crowdfunding iteration.
									</ScrollFloat>
								</h3>
							</div>
							<div className="mt-3">
								<p className="font-osans text-lg text-balance text-[#777777]">
									Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction
									stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail
									monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping
									business-to-consumer.{" "}
								</p>
							</div>
						</section>
					</Container>
				</section>
				<section className="bg-primary py-24">
					<Container mediaquery="xl:w-9/12">
						<section className="xl:w-7/10 mx-auto flex flex-col gap-y-4">
							<div className="text-center flex flex-col gap-y-4 text-white">
								<span className="text-osans text-[#F1F1F1] text-[17px]">Our numbers</span>
								<h3 className="text-4xl xl:text-5xl font-manrope xl:leading-[72px]">
									<VariableProximity
										label={"Handshake infographic mass market crowdfunding iteration."}
										className={"variable-proximity-demo"}
										fromFontVariationSettings="'wght' 400, 'opsz' 9"
										toFontVariationSettings="'wght' 1000, 'opsz' 40"
										containerRef={proximityContainerRef}
										radius={100}
										falloff="linear"
									/>
								</h3>
							</div>
						</section>
						<section className="xl:w-full mx-auto mt-18">
							<div className="font-manrope mt-3 gap-10 grid grid-cols-1 sm:grid-cols-3">
								<aside className="flex items-center justify-center">
									<div className="flex flex-col items-center lg:items-start gap-y-3">
										<h2 className="text-6xl xl:text-8xl text-sec">120m</h2>
										<p className="text-white text-base xl:text-lg font-osans">Cool feature title</p>
									</div>
								</aside>
								<aside className="flex items-center justify-center">
									<div className="flex flex-col items-center lg:items-start gap-y-3">
										<h2 className="text-6xl xl:text-8xl text-sec">10.000</h2>
										<p className="text-white text-base xl:text-lg font-osans">Cool feature title</p>
									</div>
								</aside>
								<aside className="flex items-center justify-center">
									<div className="flex flex-col items-center lg:items-start gap-y-3">
										<h2 className="text-6xl xl:text-8xl text-sec">240</h2>
										<p className="text-white text-base xl:text-lg font-osans">Cool feature title</p>
									</div>
								</aside>
							</div>
						</section>
					</Container>
				</section>
				<section className="py-24">
					<Container mediaquery="xl:w-9/12">
						<section className="xl:w-7/10 mx-auto flex flex-col gap-y-4">
							<div>
								<span className="text-osans text-[#777777] text-[20px]">Our team</span>
							</div>
							<div>
								<h3 className="text-5xl font-manrope lg:leading-[72px]">
									<ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={30} blurStrength={5}>
										The leadership team
									</ScrollReveal>
								</h3>
							</div>
							<div className="w-11/12 mt-3">
								<div className="font-osans text-lg sm:text-[19.8px] text-[#777777]">
									<ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={-30} blurStrength={5}>
										Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction
										stock user experience deployment beta innovator incubator focus.
									</ScrollReveal>
								</div>
							</div>
						</section>
						<section className="xl:w-full mx-auto mt-18">
							<div className="font-manrope mt-3 grid grid-cols-1 gap-10 md:gap-x-14 sm:grid-cols-3">
								{leadershipTeam.map((leader, index) => {
									return (
										<React.Fragment key={index}>
											<aside className="flex flex-col gap-y-4">
												<figure className="flex overflow-auto rounded-3xl h-[420px] aspect-[1/1.5]">
													<img src={leader.src} alt={leader.src} className="w-full h-full object-cover" />
												</figure>
												<div className="flex flex-col gap-y-3">
													<h2 className="text-xl">{leader.name}</h2>
													<p className="text-[1.1rem] font-osans text-[#777777]">{leader.position}</p>
												</div>
											</aside>
										</React.Fragment>
									);
								})}
							</div>
						</section>
					</Container>
				</section>
				<section className="py-32 bg-primary">
					<Container mediaquery="xl:w-9/12">
						<section className="xl:w-7/10 mx-auto flex flex-col gap-y-4">
							<div>
								<span className="text-osans font-normal text-white text-[20px]">Our values</span>
							</div>
							<div className="text-start">
								<h3 className="text-5xl font-manrope text-start text-white leading-16 lg:leading-[72px]">
									<TrueFocus glowColor="#65e4a3" borderColor="#65e4a3" sentence="Things in we believe"></TrueFocus>
								</h3>
							</div>
							<div className="w-11/12 mt-3">
								<div className="font-osans text-[.98rem] sm:text-[1.1rem] font-normal text-[#f1f1f1]">
									<ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={30} blurStrength={5}>
										Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction
										stock user experience deployment beta innovator incubator focus.
									</ScrollReveal>
								</div>
							</div>
							<div className="w-full flex flex-col gap-y-14 mt-14">
								{ourValues.map((value, index) => (
									<div role="presentation" key={index} className="flex items-start gap-5 sm:gap-10">
										<aside>
											<figure className="rounded-2xl sm:rounded-3xl overflow-hidden flex aspect-square w-[7rem] sm:w-[8.75rem]">
												<img src={value.src} alt={value.src} className="flex-grow object-cover" />
											</figure>
										</aside>
										<aside className="flex flex-col gap-y-4">
											<h4 className="text-xl font-manrope text-white">{value.title}</h4>
											<p className="font-osans text-[.95rem] sm:text-base text-[#f1f1f1]">{value.texts}</p>
										</aside>
									</div>
								))}
							</div>
						</section>
					</Container>
				</section>
				<Footer />
			</div>
		</SimpleParallax>
	);
}

export default App;
