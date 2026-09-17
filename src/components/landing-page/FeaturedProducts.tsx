import Reveal from "@/components/Reveal";
import Image from "next/image";

const products = [
	{
		id: 1,
		name: "Saafin Pure 500 ml",
		tagline: "The everyday bottle.",
		description:
			"One in the bag every morning covers most of the day. The standard size for work, travel, and being out of the house.",
		bestFor: "Office desks · Travel · Daily use",
		b2bNote: "Our most common size for office pantries and meeting rooms.",
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242",
	},
	{
		id: 2,
		name: "Saafin Family 1.5 L",
		tagline: "Built for the table.",
		description:
			"Keep one in the fridge for dinner. The size for home — meals, guests, and sharing.",
		bestFor: "Home · Family meals · Gatherings",
		b2bNote: "A practical size for restaurants and cafes serving water at the table.",
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
							The right size for the right moment.
						</h2>
					</Reveal>
					<Reveal delay={0.2}>
						<p className="max-w-sm text-sm leading-relaxed text-white/80">
							Grab a 330ml on your way out. Keep a 1.5L on the table for dinner.
							SAAFIN has a size for wherever you are.
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
								<p className="mt-1 text-sm font-medium text-saafin-dark-muted">
									{product.tagline}
								</p>
								<p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
									{product.description}
								</p>
							</div>

							<div className="mt-10">
								<p className="text-xs capitalize tracking-widest text-white/60">Best For</p>
								<p className="mt-2 text-sm text-saafin-dark-text">{product.bestFor}</p>
								<p className="mt-4 text-xs leading-relaxed text-saafin-dark-muted/70 italic">
									{product.b2bNote}
								</p>
							</div>

							<Reveal delay={0.25 + i * 0.14}>
								<a
									href="#contact"
									id={`ask-ordering-${product.id}`}
									className="mt-8 inline-flex w-fit items-center gap-3 rounded-saafin-full bg-saafin-dark-surface px-6 py-3 text-sm font-medium text-saafin-dark-text transition-colors hover:bg-saafin-dark-border"
								>
									Ask About Ordering
									<svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
										<path d="M6 2h12v20l-6-4.2L6 22V2z" />
									</svg>
								</a>
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
