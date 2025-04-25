import { eclipseShape } from "@/data/images";
import { Parallax } from "react-parallax";

export default function FooterBanner() {
	return (
		<>
			<div className="bg-primary relative min-h-[400px] p-10 flex items-center justify-center overflow-hidden rounded-xl" role="banner">
				<figure className="absolute -top-1/2 right-0" role="presentation">
					<img src={eclipseShape} alt={eclipseShape} />
				</figure>
				<div className="relative md:w-10/12 xl:w-7/10 mx-auto">
					<Parallax
						bgImage="/path/to/another/image"
						className="w-full !overflow-visible"
						renderLayer={(percentage) => (
							<div
								style={{
									transform: `scale(${Math.max(1, 1.3 - percentage * 0.5)})`,
									filter: `blur(${Math.min((1 - percentage) * 2, 2)}px)`,
									opacity: Math.min(percentage + 0.2, 1),
									fontWeight: Math.max(400, 600 - percentage * 500),
									transition:
										"transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.3s ease-in-out, opacity 0.3s ease-in-out, font-weight 0.3s ease-in-out",
								}}>
								<div className="font-manrope text-center">
									<h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] leading-[1.5]">An enterprise template to ramp up your company website</h2>
								</div>
							</div>
						)}></Parallax>

					<div className="md:w-11/12 mx-auto mt-14">
						<form action="" className="font-osans flex-wrap gap-4 flex items-center justify-center gap-x-8">
							<input
								type="email"
								className="bg-white rounded-full text-secondary outline-transparent focus:outline-white/60 outline-1 outline-offset-[3px] transition-all px-5 py-4 w-full max-w-[330px] ease-in-out duration-300 h-12 placeholder:text-primary"
								placeholder="Your email address"
							/>
							<button type="submit" className="bg-sec py-3 px-10 font-bold rounded-full">
								Start now
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
