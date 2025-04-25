export const ImageFigure = ({ src, index, className = "", aspect = "", isMobile = false }) => (
	<figure className={`relative rounded-3xl overflow-hidden flex ${className} ${isMobile ? "w-[70vw] sm:w-[50vw] aspect-square" : aspect}`}>
		<img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full flex-grow object-cover" loading="lazy" />
	</figure>
);
