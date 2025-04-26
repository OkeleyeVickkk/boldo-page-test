import { desktopLayout, mobileImages } from "@/data";
import { ImageFigure } from "../ui/ImageFigure";
import ScrollVelocity from "../animations/ScrollVelocity";

export const Gallery = () => (
	<>
		<section role="presentation" className="hidden lg:grid grid-cols-[1fr] lg:w-9/10 mx-auto gap-10 md:grid-cols-[1fr_1.3fr_1fr]">
			{desktopLayout.map((column, colIndex) => (
				<aside key={`desktop-col-${colIndex}`} className={column.className}>
					{column.images.map((img, imgIndex) => (
						<ImageFigure
							key={`desktop-img-${colIndex}-${imgIndex}`}
							src={img}
							index={colIndex * 2 + imgIndex}
							className={column.images.length === 1 ? "h-full" : "h-[285px]"}
						/>
					))}
				</aside>
			))}
		</section>

		{/* Mobile Layout */}
		<section role="presentation" className="lg:hidden">
			<ScrollVelocity images={[...mobileImages]} velocity={30} />
		</section>
	</>
);
