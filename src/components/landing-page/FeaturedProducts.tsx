import Reveal from "@/components/Reveal";
import Image from "next/image";

const products = [
	{
		id: 1,
		name: "Saafin Pure 500 ml",
		bestFor: "Everyday Use • Travel • Work • On the Go",
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242",
	},
	{
		id: 2,
		name: "Saafin Family 1.5 L",
		bestFor: "Home • Family Meals • Gatherings • Sharing",
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_4gt55n4gt55n4gt5.jpg?updatedAt=1788449991119",
	},
];

export default function FeaturedProducts() {
	return (
		<section className="dark bg-saafin-dark-bg text-saafin-dark-text">
			<div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
				<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
					<Reveal delay={0.1}>
						<h2 className="text-3xl font-medium tracking-tighter capitalize text-saafin-dark-text sm:text-4xl lg:text-5xl">
							Pure Hydration. Everyday Essentials.
						</h2>
					</Reveal>
					<Reveal delay={0.2}>
						<p className="max-w-sm text-sm leading-relaxed text-white/80">
							SAAFIN offers convenient bottled drinking water for home, office, travel, and daily routines.
						</p>
					</Reveal>
				</div>
			</div>

			<div className="grid grid-cols-1 border-t border-saafin-dark-border md:grid-cols-2">
				{products.map((product, i) => (
					<Reveal
						key={product.id}
						className={`grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:px-10 ${
							i !== products.length - 1
								? "border-b border-saafin-dark-border md:border-b-0 md:border-r"
								: ""
						}`}
						delay={0.12 + i * 0.14}
					>
						<div className="flex flex-col justify-between">
							<div>
								<h3 className="text-2xl font-semibold leading-snug text-saafin-dark-text md:text-3xl">
									{product.name}
								</h3>
								<p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
									{product.id === 1
										? "Designed for life on the move. The convenient 500 ml bottle is easy to carry and ideal for work, travel, outdoor activities, and everyday refreshment."
										: "Made for the moments you share. The 1.5 L bottle is ideal for homes, family meals, gatherings, and keeping everyone refreshed throughout the day."}
								</p>
							</div>

							<div className="mt-10">
								<p className="text-xs capitalize tracking-widest text-white/80">Best For</p>
								<p className="mt-2 text-sm text-saafin-dark-text">{product.bestFor}</p>
							</div>

						<Reveal delay={0.25 + i * 0.14}>
							<button className="mt-8 inline-flex w-fit items-center gap-3 rounded-saafin-full bg-saafin-dark-surface px-6 py-3 text-sm font-medium text-saafin-dark-text transition-colors hover:bg-saafin-dark-border">
								{product.id === 1 ? "Explore SAAFIN Pure" : "Explore SAAFIN Family"}
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
									<path d="M6 2h12v20l-6-4.2L6 22V2z" />
								</svg>
							</button>
						</Reveal>
						</div>

						<div className="relative aspect-4/5 w-full overflow-hidden rounded-saafin-lg">
							<Image
								src={product.image}
								alt={product.name}
								fill
								loading="lazy"
								sizes="(max-width: 768px) 100vw, 25vw"
								className="h-full w-full object-cover"
							/>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
