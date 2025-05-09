import React from "react";
import PricingCard from "../UI/PricingCard";

const Pricing = () => {
  const priceInfo = [
    {
      id: 1,
      priceCategory: "Starter",
      description: "Best option for personal use & for your next project.",
      amount: 29,
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      id: 2,
      priceCategory: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      amount: 99,
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      id: 3,
      priceCategory: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      amount: 499,
      list: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="items-center grid gap-8 lg:grid-cols-3 xl:gap-16">
          {priceInfo.map(({ list, amount, priceCategory, id }) => (
            <PricingCard
              list={list}
              amount={amount}
              priceCategory={priceCategory}
              key={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
