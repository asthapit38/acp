const AboutFairTradePriciple = () => {
  const principles = [
    "Creating Opportunities for Economically Disadvantaged Producers",
    "Transparency and Accountability",
    "Fair Trading Practices",
    "Payment of a Fair Price",
    "Ensuring no Child Labor and Forced Labor",
    "Commitment to Non-Discrimination, Gender Equity and Women’s Economic Empowerment and Freedom of Association",
    "Ensuring Good Working Conditions",
    "Providing Capacity Building",
    "Promoting Fair Trade",
    "Respect for the Environment",
  ];

  const benefits = [
    "Performance Reward",
    "Clothing Allowance",
    "Medical Allowance",
    "Household Allowance",
    "Emergency Allowance",
    "Foresight Fund",
    "Paid maternity / paternity leave",
    "Financial Loans",
    "Education allowance",
    "Workshop Cafeteria",
    "Producer Counseling Service",
    "Annual Lunch",
    "Informal Education",
    "Producers Work Incentive",
    "Award for Producer",
    "Producers’ Alliance",
    "Producers and Management Consultative Committee",
    "Health Camps",
    "Insurance",
  ];

  const environmental_initiatives = [
    "Installation of 32kWp solar in the head office, 4.96 kWp in its retail outlet",
    "Use of solar to heat the boiler to some extent",
    "Waste water treatment plant",
    "Rainwater harvesting system",
    "Discourage the use of plastic bags as far as possible",
    "Change from using kerosene-based dye to water-based dyes",
    "Substituted acetic acid with hydrochloric acid in dyeing",
    "Change from kerosene based kiln to electric kiln for ceramics firing",
    "Use of sustainable and biodegradable raw materials like clay, soft wood, cotton, bamboo, wool and recycled paper",
    "Upcycling",
  ];
  return (
    <article className="space-y-4" id="about-fair-trade">
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
        Fair Trade Principles
      </p>
      <div className="space-y-5">
        <ul className="space-y-1 text-[#000] leading-loose list-disc list-inside">
          {principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
        <p className="font-bold">Social Welfare Program</p>
        <p className="text-[#000] leading-loose">
          Besides direct remuneration, ACP has the following financial and
          non-financial benefit programs for staff and producers.
        </p>
        <ul className="text-[#000] leading-loose grid grid-cols-2 gap-y-1.5 gap-x-6">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="px-3 py-1 border rounded-lg border-primary/20"
            >
              {benefit}
            </li>
          ))}
        </ul>

        <p className="font-bold">
          Commitment to Efficiency, Quality and Innovation
        </p>

        <div className="text-[#000] leading-loose space-y-5">
          <p>
            ACP operates business with full accountability and is highly
            committed to give the best to its buyers. We believe in long term
            partnership and growing together. For this reason, ACP gives high
            priority to prompt communication, timely delivery of samples and
            orders and very importantly, quality. Quality is at the core of
            ACP’s operations. ACP is committed to provide high quality products
            and services. From raw materials to the end product, ACP ensures
            quality is met at every stage of production.
          </p>
          <p>
            New product development is a continuous process at ACP. ACP’s
            marketing and design experts lead the annual launch new collection
            in Dhukuti, the retail store as well as offer new designs to buyers.
            For greater efficiently, ACP has and will continue to upgrade
            production process through simple tools and technology, keeping in
            mind not to take away work from the artisans.
          </p>
          <p>
            ACP is flexible when it comes to working with buyers’ designs. Our
            core competency has been customization of products according to
            buyers’ specific design requirements. ACP always work on exclusivity
            of designs. As ACP works in various skill categories, mix media is
            yet another strength we possess.
          </p>
        </div>

        <p className="font-bold">Respect for the Environment</p>

        <div className="space-y-5 text-[#000] leading-loose">
          <p>
            For the preservation of the environment, ACP has taken various
            measures outlined below. ACP was also been recognized by the
            Kathmandu Metropolitian for the precautionary measures undertaken to
            prevent industrial pollution.
          </p>
          <ul className="space-y-1 text-[#000] leading-loose list-disc list-inside">
            {environmental_initiatives.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default AboutFairTradePriciple;
