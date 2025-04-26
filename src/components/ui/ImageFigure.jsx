export const ImageFigure = ({ src, index, className = "", aspect = "", isMobile = false }) => (
	<figure
		className={`relative group image-mask rounded-3xl overflow-hidden flex ${className} ${isMobile ? "w-[70vw] sm:w-[50vw] aspect-square" : aspect}`}>
		<img
			src={src}
			alt={`Gallery image ${index + 1}`}
			className="w-full h-full flex-grow object-cover group-hover:scale-110 transition-all ease-in-out duration-300"
			loading="lazy"
		/>
	</figure>
);
