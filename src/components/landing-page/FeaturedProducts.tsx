const products = [
	{
		id: 1,
		name: "Saafin Pure 500 ml",
		bestFor: "Everyday • On the Go • Active Lifestyle",
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242",
	},
	{
		id: 2,
		name: "Saafin Family 1.5 L",
		bestFor: "Families • Home • Meals",
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_4gt55n4gt55n4gt5.jpg?updatedAt=1788449991119",
	},
];

export default function FeaturedProducts() {
	return (
		<section className="dark bg-saafin-dark-bg text-saafin-dark-text">
			<div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
				<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
					<h2 className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-6xl">
						Saafin essentials
					</h2>
					<p className="max-w-sm text-sm leading-relaxed text-saafin-dark-muted">
						Clean, refreshing mineral water in sizes made for your everyday routine.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 border-t border-saafin-dark-border md:grid-cols-2">
				{products.map((product, i) => (
					<div
						key={product.id}
						className={`grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:px-10 ${
							i !== products.length - 1
								? "border-b border-saafin-dark-border md:border-b-0 md:border-r"
								: ""
						}`}
					>
						<div className="flex flex-col justify-between">
							<div>
								<h3 className="text-2xl font-semibold leading-snug text-saafin-dark-text md:text-3xl">
									{product.name}
								</h3>
								<p className="mt-3 max-w-sm text-sm leading-relaxed text-saafin-dark-muted">
									{product.id === 1
										? "Natural mineral water designed for everyday hydration. Convenient, refreshing, and easy to take with you."
										: "Balanced mineral water made for sharing. Keep your family refreshed at home, around the table, or throughout the day."}
								</p>
							</div>

							<div className="mt-10">
								<p className="text-xs uppercase tracking-widest text-saafin-dark-muted">Best for</p>
								<p className="mt-2 text-sm text-saafin-dark-text">{product.bestFor}</p>
							</div>

							<button className="mt-8 inline-flex w-fit items-center gap-3 rounded-saafin-full bg-saafin-dark-surface px-6 py-3 text-sm font-medium text-saafin-dark-text transition-colors hover:bg-saafin-dark-border">
															Explore Bottle
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
									<path d="M6 2h12v20l-6-4.2L6 22V2z" />
								</svg>
							</button>
						</div>

						<div className="relative aspect-[4/5] w-full overflow-hidden rounded-saafin-lg">
							<img src={product.image} alt={product.name} className="h-full w-full object-cover" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
