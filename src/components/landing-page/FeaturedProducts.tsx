const products = [
	{
		id: 1,
		category: "CLASSICS",
		name: "Icon Comfort beanie",
		price: "$40",
		material: "100% merino wool",
		care: "Hand wash cold",
		stock: "In stock, ships in 2 days",
		rating: 5,
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242",
	},
	{
		id: 2,
		category: "CLASSICS",
		name: "Icon hoodie",
		price: "$65",
		material: "Heavyweight cotton fleece",
		care: "Machine wash cold",
		stock: "In stock, ships in 2 days",
		rating: 5,
		image:
			"https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_4gt55n4gt55n4gt5.jpg?updatedAt=1788449991119",
	},
];

function StarRow({ rating }: { rating: number }) {
	return (
		<div className="flex items-center gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					viewBox="0 0 20 20"
					fill={i < rating ? "currentColor" : "none"}
					stroke="currentColor"
					strokeWidth={1.2}
					className="h-3.5 w-3.5 text-[#F6C083]"
				>
					<path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.8 4.8 17.6l1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
				</svg>
			))}
		</div>
	);
}

export default function FeaturedProducts() {
	return (
		<section className="dark bg-saafin-dark-bg text-saafin-dark-text">
			<div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
				<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
					<h2 className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-6xl">
						Featured Products
					</h2>
					<p className="max-w-sm text-sm leading-relaxed text-saafin-dark-muted">
						Discover our classic pieces, thoughtfully made and built to last.
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
								<p className="mt-3 text-sm text-saafin-dark-muted">
									from <span className="text-saafin-dark-text">{product.price}</span>
								</p>
							</div>

							<div className="mt-10 space-y-3">
								<div className="flex items-center justify-between">
									<span className="text-sm text-saafin-dark-text">{product.material}</span>
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-saafin-dark-muted">
										<path d="M6 3v18M6 3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3M6 9v6M18 21V3M18 21a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3" />
									</svg>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-sm text-saafin-dark-text">{product.care}</span>
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-saafin-dark-muted">
										<rect x="4" y="4" width="16" height="16" rx="2" />
										<path d="M8 12h8" />
									</svg>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-sm text-saafin-dark-text">{product.stock}</span>
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-saafin-dark-muted">
										<circle cx="12" cy="12" r="9" />
										<path d="M12 7v5l3 3" />
									</svg>
								</div>

								<div className="flex items-center justify-between pt-1">
									<span className="text-xs tracking-widest text-saafin-dark-muted">{product.category}</span>
									<StarRow rating={product.rating} />
								</div>
							</div>

							<button className="mt-8 inline-flex w-fit items-center gap-3 rounded-saafin-full bg-saafin-dark-surface px-6 py-3 text-sm font-medium text-saafin-dark-text transition-colors hover:bg-saafin-dark-border">
								Explore Product
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
