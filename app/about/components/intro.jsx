import Link from "next/link";
const AboutIntro = () => {
  return (
    <article className="space-y-4" id="about">
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
        The Organization - ACP
      </p>
      <div className="font-light leading-loose space-y-2">
        <p>
          Nepal’s premier craft organization, Association for Craft Producers
          (ACP) has been successfully balancing its social obligations and
          business priorities since its establishment in 1984. ACP is proud to
          define itself as a
          <i>socially oriented, commercially viable enterprise.</i>
        </p>
        <p>
          Association for Craft Producers is a local not for profit Fair Trade
          handicraft organization. It operates under a 11-member Executive Board
          out of which 8 are women. ACP has 50 full time administrative staff
          and 30 in house producers. ACP works with more than 500 producers who
          are either homebased or work in groups. ACP works with 30 producer
          groups. Directly and indirectly, ACP benefits 3000 people
        </p>
        <p>
          The headquarters or the resource center is a permanent facility of
          43,000 sq.ft. based in Rabi Bhawan, Kathmandu. The major activities at
          the resource center are the procurement, processing and distribution
          of raw materials and semi-finished goods, development of new products
          and customized prototypes, quality checking and finishing.
        </p>
        <p>
          The facility also houses Nepali Craft Trading Pvt. Ltd., the sister
          concern of ACP through which it exports. Since ACP is an NGO, it is
          not allowed to export directly. The staff and in house producers come
          to the headquarters every day. Most of the production is done at the
          producers’ homes or workshops. ACP also runs a retail store,{" "}
          <Link href="/dhukuti" className="font-bold underline">
            Dhukuti
          </Link>{" "}
          is a 3 story building in a rented space of 3,000 sq. ft.
        </p>
      </div>
    </article>
  );
};
export default AboutIntro;
