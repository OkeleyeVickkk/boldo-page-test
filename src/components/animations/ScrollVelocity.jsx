import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";

function useElementWidth(ref) {
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		function updateWidth() {
			if (ref.current) {
				setWidth(ref.current.offsetWidth);
			}
		}
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [ref]);

	return width;
}

export const ScrollVelocity = ({
	scrollContainerRef,
	images = [],
	velocity = 100,
	className = "",
	damping = 50,
	stiffness = 400,
	numCopies = 3,
	velocityMapping = { input: [0, 1000], output: [0, 5] },
	parallaxClassName,
	scrollerClassName,
	parallaxStyle,
	scrollerStyle,
}) => {
	const baseX = useMotionValue(0);
	const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
	const { scrollY } = useScroll(scrollOptions);
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping,
		stiffness,
	});
	const velocityFactor = useTransform(smoothVelocity, velocityMapping.input, velocityMapping.output, { clamp: false });

	const containerRef = useRef(null);
	const containerWidth = useElementWidth(containerRef);

	function wrap(min, max, v) {
		const range = max - min;
		const mod = (((v - min) % range) + range) % range;
		return mod + min;
	}

	const x = useTransform(baseX, (v) => {
		if (containerWidth === 0) return "0px";
		return `${wrap(-containerWidth, 0, v)}px`; // Ensures the images loop correctly
	});

	const directionFactor = useRef(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * velocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();
		baseX.set(baseX.get() + moveBy); // Move the images continuously
	});

	// Create a single sequence of all images repeated numCopies times
	const imageSequence = [];
	for (let i = 0; i < numCopies; i++) {
		imageSequence.push(...images); // Repeat images horizontally
	}

	return (
		<div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
			<motion.div className={`flex gap-x-3 ${scrollerClassName}`} style={{ x, ...scrollerStyle }} ref={containerRef}>
				{imageSequence.map((image, index) => (
					<figure key={`image-${index}`} className={`rounded-3xl overflow-hidden flex h-[285px] min-w-[285px] aspect-square ${className}`}>
						<img src={image} alt={`Gallery image ${(index % images.length) + 1}`} className="flex-grow object-cover" loading="lazy" />
					</figure>
				))}
			</motion.div>
		</div>
	);
};

export default ScrollVelocity;
