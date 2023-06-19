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
  return (
    <article className="space-y-4" id="about-fair-trade">
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
        Fair Trade Principles
      </p>
      <div className="space-y-5">
        <ul class="space-y-1 list-disc list-inside font-light leading-loose">
          {principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
        <p className="font-bold">Social Welfare Program</p>
        <p className="font-light leading-loose">
          Besides direct remuneration, ACP has the following financial and
          non-financial benefit programs for staff and producers.
        </p>
        <ul class="font-light leading-loose grid grid-cols-2 gap-y-1.5 gap-x-6">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="border border-primary/20 px-3 py-1 rounded-lg"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AboutFairTradePriciple;
