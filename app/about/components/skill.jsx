const AboutSkill = () => {
  const crafts = [
    "Weaving",
    "Dyeing",
    "Felting",
    "Knitting",
    "Screen Printing",
    "Block Printing",
    "Metal work",
    "Leather",
    "Carpentry",
    "Ceramics",
    "Painting",
    "Glass work",
    "Paper craft",
    "Embroidery",
    "Quilting",
    "Crochet",
    "Basket weaving",
    "Sewing",
  ];

  return (
    <article className="space-y-4" id="about-skill">
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
        Skill Categories
      </p>
      <div className="grid grid-cols-3 gap-y-2.5 gap-x-6">
        {crafts.map((craft) => (
          <p className="border border-primary/20 px-3 py-1.5 rounded-lg">
            {craft}
          </p>
        ))}
      </div>
    </article>
  );
};

export default AboutSkill;
