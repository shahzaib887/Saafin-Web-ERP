import Image from "next/image";

interface TalentCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  avatars: string[];
  isDark?: boolean;
}

export default function TalentSection() {
  const cards: TalentCard[] = [
    {
      title: "Brand Identity",
      description: "Visually and emotionally communicate a brand's values, personality.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      ),
      avatars: [
        "/avatars/avatar-1.jpg",
        "/avatars/avatar-2.jpg",
        "/avatars/avatar-3.jpg",
        "/avatars/avatar-4.jpg",
      ],
    },
    {
      title: "UIUX Design",
      description: "Crafting Visually Stunning and User-Centric Websites.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
      avatars: [
        "/avatars/avatar-5.jpg",
        "/avatars/avatar-6.jpg",
        "/avatars/avatar-7.jpg",
        "/avatars/avatar-8.jpg",
      ],
      isDark: true,
    },
    {
      title: "Social Media",
      description: "Strategize, create, and manage engaging content across platforms to build brand awareness.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      avatars: [
        "/avatars/avatar-9.jpg",
        "/avatars/avatar-10.jpg",
        "/avatars/avatar-11.jpg",
        "/avatars/avatar-12.jpg",
      ],
    },
    {
      title: "Animation",
      description: "visually engaging and dynamic motion graphics or character animations that bring stories, concepts, or ideas to life.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8l6 4-6 4V8z" />
        </svg>
      ),
      avatars: [
        "/avatars/avatar-13.jpg",
        "/avatars/avatar-14.jpg",
        "/avatars/avatar-15.jpg",
        "/avatars/avatar-16.jpg",
      ],
    },
  ];

  return (
    <section className="w-full bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6 flex items-start justify-between">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900 px-4 py-1.5 text-xs font-medium text-gray-300">
                Talent
              </span>

              {/* Headline */}
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Explore Our
                <br />
                Expert <span className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-2 py-1 text-2xl md:text-3xl lg:text-4xl">✨</span>Talent
              </h1>
            </div>

            {/* Right side text */}
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-gray-400 md:block">
              we connect you with the best
              <br />
              professionals from around
              <br />
              the world.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl p-8 md:p-10 ${
                card.isDark
                  ? "bg-white text-black"
                  : "bg-gray-900 text-white"
              }`}
            >
              {/* Top: Icon and Title */}
              <div>
                <div
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full ${
                    card.isDark ? "bg-black text-white" : "bg-black text-white"
                  }`}
                >
                  {card.icon}
                </div>

                <h3 className="text-2xl font-semibold md:text-3xl">
                  {card.title}
                </h3>
              </div>

              {/* Bottom: Description, Avatars, Arrow */}
              <div className="mt-16 md:mt-20">
                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    card.isDark ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {card.description}
                </p>

                <div className="flex items-center justify-between">
                  {/* Avatars */}
                  <div className="flex -space-x-3">
                    {card.avatars.map((avatar, i) => (
                      <div
                        key={i}
                        className={`relative h-10 w-10 overflow-hidden rounded-full border-2 ${
                          card.isDark ? "border-white" : "border-gray-900"
                        }`}
                      >
                        <Image
                          src={avatar}
                          alt={`Team member ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Arrow Button */}
                  <button
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      card.isDark
                        ? "border-gray-300 text-black hover:bg-gray-100"
                        : "border-gray-700 text-white hover:bg-gray-800"
                    }`}
                    aria-label={`View ${card.title}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}