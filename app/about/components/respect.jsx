const AboutRespect = () => {
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
    <article className="space-y-5" id="about-respect">
      <p className="font-bold">Respect for the Environment</p>
      <div className="space-y-5 text-[#000] leading-loose">
        <p>
          For the preservation of the environment, ACP has taken various
          measures outlined below. ACP was also been recognized by the Kathmandu
          Metropolitian for the precautionary measures undertaken to prevent
          industrial pollution.
        </p>
        <ul className="space-y-1 text-[#000] leading-loose list-disc list-inside">
          {environmental_initiatives.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AboutRespect;
