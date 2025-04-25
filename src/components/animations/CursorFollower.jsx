import { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
	const ballRef = useRef(null);

	useEffect(() => {
		const ball = ballRef.current;

		gsap.set(ball, { xPercent: -50, yPercent: -50 });

		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		const mouse = { x: pos.x, y: pos.y };
		const speed = 0.1;
		const fpms = 60 / 1000;

		const xSet = gsap.quickSetter(ball, "x", "px");
		const ySet = gsap.quickSetter(ball, "y", "px");

		const mouseMoveHandler = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		window.addEventListener("mousemove", mouseMoveHandler);

		const ticker = gsap.ticker.add((time, deltaTime) => {
			const delta = deltaTime * fpms;
			const dt = 1.0 - Math.pow(1.0 - speed, delta);

			pos.x += (mouse.x - pos.x) * dt;
			pos.y += (mouse.y - pos.y) * dt;

			xSet(pos.x);
			ySet(pos.y);
		});

		return () => {
			window.removeEventListener("mousemove", mouseMoveHandler);
			gsap.ticker.remove(ticker);
		};
	}, []);

	return (
		<div
			ref={ballRef}
			className="ball"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: 40,
				height: 40,
				borderRadius: "50%",
				backgroundColor: "red",
				pointerEvents: "none",
				zIndex: 9999,
			}}
		/>
	);
};

export default CursorFollower;
