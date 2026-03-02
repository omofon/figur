import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Titilope Alayaki",
      initial: "T",
      color: "bg-blue-600",
      platform: "playstore",
      rating: 4,
      text: "I've had seamless transactions since I've downloaded the app and I've been able to use the virtual dollar card for transactions on Alibaba and subscription payment on DSLR booth. It's a very easy to use app with a user experience and a beautiful UI. I recommend.",
    },
    {
      name: "Rita Usman",
      initial: "R",
      color: "bg-teal-500",
      platform: "apple",
      rating: 5,
      text: "The customer support is readily available, and the app's security features are impressive, ensuring that customer data stays safe and protected.",
    },
    {
      name: "Benjamin Ijezie",
      initial: "B",
      color: "bg-orange-500",
      platform: "apple",
      rating: 4,
      text: "It's amazing how I get cashbacks for data and airtime purchases, to think it is also an awoof package. WOW!!",
    },
    {
      name: "Barnabas Yakubu",
      initial: "B",
      color: "bg-purple-600",
      platform: "playstore",
      rating: 5,
      text: "If you are looking for an app to pay your bills, send and receive money, and even more in a jiffy, then Figur is the plug, I feel Figur is simplicity and efficiency at it best!!",
    },
    {
      name: "Enejim Glory",
      initial: "E",
      color: "bg-pink-500",
      platform: "apple",
      rating: 5,
      text: "I really do love this app it has a unique user interface which by the way is very easy to navigate through it also offers very fast transfer services. The cheap data feature it just awesome",
    },
    {
      name: "Benita Ogedi",
      initial: "B",
      color: "bg-indigo-600",
      platform: "playstore",
      rating: 5,
      text: "I used the figur app for two months and had a mostly positive experience. I liked the clean and simple design of the app, and the navigation was very intuitive. The feature that allowed me to customize my experience was especially useful.",
    },
  ];

  return (
    <section className="container-padding flex flex-col gap-10 py-12 mb-16 md:mb-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 px-4 md:px-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Customer Impressions
        </h2>
        <p className="text-sm text-center max-w-2xl text-gray-600">
          See what customers are saying to know if you would recommend Figur to
          your network.
        </p>
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="break-inside-avoid bg-white p-8 flex flex-col gap-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] mb-8"
          >
            <header className="flex items-center gap-4">
              <div
                className={`h-12 w-12 shrink-0 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-lg`}
              >
                {review.initial}
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm text-primary-navy">
                  {review.name}
                </h4>
                <div className="flex items-center gap-1">
                  <img
                    src={`/images/logos/${review.platform}.svg`}
                    alt={review.platform}
                    className="w-4 h-4 mr-0.5"
                  />
                  {/* Dynamic Star Generation */}
                  {[...Array(review.rating)].map((_, i) => (
                    <img
                      key={i}
                      src="/images/logos/star.svg"
                      alt="Star icon"
                      className="w-3 h-3"
                    />
                  ))}
                </div>
              </div>
            </header>
            <p className="text-gray-600 leading-relaxed text-sm">
              "{review.text}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
