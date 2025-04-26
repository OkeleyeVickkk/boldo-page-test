import { hImg1, hImg2, hImg3, hImg4, hImg5, leadership1, leadership2, leadership3, value1, value2, value3 } from "./images";

export const leadershipTeam = [
	{
		src: leadership1,
		name: "Michael Scott",
		position: "General Manager",
	},
	{
		src: leadership2,
		name: "Dwight Schrute",
		position: "General Manager",
	},
	{
		src: leadership3,
		name: "Pam Beetsley",
		position: "General Manager",
	},
];

export const ourValues = [
	{
		src: value1,
		title: "We are commited.",
		texts: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
	},
	{
		src: value2,
		title: "We are responsible.",
		texts: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
	},
	{
		src: value3,
		title: "We aim for progress.",
		texts: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
	},
];

export const desktopLayout = [
	{
		images: [hImg1, hImg2],
		className: "flex flex-col gap-y-10",
	},
	{
		images: [hImg3],
		className: "flex flex-col gap-y-10",
	},
	{
		images: [hImg4, hImg5],
		className: "flex flex-col gap-y-10",
	},
];

export const mobileImages = [hImg1, hImg2, hImg3, hImg4, hImg5];

export const featureData = [
	{ to: 120, duration: 5, suffix: "m", title: "Cool feature title" },
	{ to: 10, duration: 3, suffix: ".000", title: "Cool feature title" },
	{ to: 240, duration: 4, suffix: "", title: "Cool feature title" },
];
