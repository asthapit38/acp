import Banner from "@/app/components/ui/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="">
      <Banner title="Discover Our Story: Who We Are and What We Stand For" />
      <div className="flex flex-col max-w-5xl mx-auto mt-6 gap-y-6">
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            The Organization - ACP
          </p>
          <p className="font-light leading-loose">
            The Association for Craft Producers (ACP) is a local, not for
            profit, fair trade organization providing design, marketing,
            management, and technical services to low-income Nepalese craft
            producers. ACP is a resource to advance and globally distribute
            their work, for which they receive fair wages and generous benefits.
            Together, we blend traditional craft with modern design and
            technology to suit market trends. For buyers' specific requests, we
            offer a flexible program that encourages creative collaboration. An
            item may be revised or recreated for a completely original product.
          </p>
        </article>
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            Our Growth
          </p>
          <p className="font-light leading-loose">
            Founded in 1984 with just 38 producers, five full time staff members
            and three skill categories, ACP has grown to around 1000 artisans
            (90% female), 60 full time staff members, 20 skill categories, and
            has expanded from a 4000 sq. feet building to a spacious 45,000 sq.
            feet facility. We cater to the individual consumer through our
            retail shop 'Dhukuti' in Lalitpur, and export to more than 18
            countries through our sister company, Nepali Craft Trading (P) Ltd..
            Our Executive Director, Meera Bhattarai, served for a decade as
            Founding Chair of Fair Trade Group Nepal, and currently holds the
            titles of Past President and Advisor. ACP is a founding member of
            WFTO ASIA, and is a member of the World Fair Trade Organization.
          </p>
        </article>
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            Fair Trade
          </p>
          <p className="font-light leading-loose">
            ACP is a certified Fair Trade Organization since 2003. Based on the
            10 principles of Fair Trade prescribed by the World Fair Trade
            Organization (WFTO), ACP abides and upholds these in its daily and
            strategic work. In regular audits conducted by WFTO, ACP has proven
            throughout the years that it has implemented and upheld the
            principals. There are numerous programs ACP has created that benefit
            the producers and conserve the environment. For further detail
            please read under the section “Environment” and “Producers Benefits”
            how the principals are incorporated into ACP’s day to day working
            processes.
          </p>
        </article>
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            Producer Benefits
          </p>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Foresight Fund</p>
            <p className="font-light leading-loose">
              In recognition of their service, ACP provides producers with funds
              at the time of retirement. Producers who have completed four years
              of continuous service are eligible to receive an annual payment
              equivalent to one twelfth of his or her prior annual earnings.
              This is paid into an interest bearing account.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Girl Child Education Allowance </p>
            <p className="font-light leading-loose">
              To encourage education in female children, ACP allots a monthly
              allowance for up to three years to producers who keep their
              daughters in school for at least four consecutive years. As
              incentive to excel, ACP supports the three most outstanding
              students for a fourth year. ACP has also recognized the need for
              boy child education, and has been applying the same allowance to
              male children.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Medical Allowance</p>
            <p className="font-light leading-loose">
              After completing 6 months in the association, producers are
              eligible for a medical stipend to use for themselves or their
              family.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Work Incentive and Performance Rewards</p>
            <p className="font-light leading-loose">
              To create a sense of 'healthy competition' between our producers,
              we offer rewards for quality performance and seniority.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Producers' Alliance</p>
            <p className="font-light leading-loose">
              Realizing the need for effective communication among the
              producers, the Producers' Alliance was established in 1996. This
              alliance helps the producers understand their rights, privileges,
              and responsibilities.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">
              Producers and Management Consultative Committee (PMCC)
            </p>
            <p className="font-light leading-loose">
              Realizing the need for effective communication among the
              producers, the Producers' Alliance was established in 1996. This
              alliance helps the producers understand their rights, privileges,
              and responsibilities.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Producers Saving Program</p>
            <p className="font-light leading-loose">
              Many artisans have never had the opportunity to save money in
              their lifetime. With this program, producers are encouraged to
              deposit 10% of their monthly earnings in an interest bearing
              account, while many choose to deposit more than the recommended
              amount. Submission of an application with reason is needed to
              withdraw from the account.
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Workshop Cafeteria</p>
            <p className="font-light leading-loose">
              Producers that work in the main facility unit receive hot,
              nutritious meals and hygienic drinking water at a subsidized rate
            </p>
          </aside>
          <aside className="grid grid-cols-[370px_1fr] gap-3">
            <p className="font-bold">Others include</p>
            <p className="font-light leading-loose">
              Clothing allowance, 90 day paid Maternity Leave, 15 day paid
              Paternity lLave, Emergency Allowance, Health Camps for
              Preventative and Curative Measures, and Informal Education of
              pertinent matters like health, education and social issues.
            </p>
          </aside>
        </article>
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            Environment
          </p>
          <p className="font-light leading-loose">
            Nestled at the foot of the Himalayas, ACP takes careful and
            deliberate steps to preserve our environment. We have installed a
            waste water treatment plant and rainwater harvesting system, use
            recycled paper, and discourage the use of plastic bags. Soft wood is
            used for carpentry and we have shifted from oil to water based
            pigments for printing and substituted acetic acid with hydrochloric
            acid in dyeing. We are harnessing the steam released during cooling
            off of the boilers in the dyeing to heat water for felting and have
            made changeover from kerosene based firing to electric firing for
            ceramics.
          </p>
        </article>
        <article className="space-y-4">
          <p className="text-2xl font-bold leading-relaxed tracking-wider text-primary font-title">
            Affiliations
          </p>
        </article>

        <p className="text-2xl font-bold leading-relaxed tracking-wider text-center text-primary font-title">
          Location & Contact Information
        </p>
        <div className="relative">
          <div className="w-full overflow-hidden bg-gray-400 border rounded-2xl aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7856.8627753217625!2d85.28883546620187!3d27.699599596656284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb186706b12533%3A0x88f209a4e803793a!2sAssociation%20of%20Craft%20Producers!5e0!3m2!1sen!2snp!4v1682914912032!5m2!1sen!2snp"
              className="w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="absolute max-w-xs p-6 space-y-5 bg-white rounded-md shadow-md bottom-4 right-4">
            <div className="space-y-2 opening-hours">
              <p className="text-xl font-bold leading-relaxed tracking-wider text-primary font-title">
                Opening Hours
              </p>
              <div className="flex gap-x-2">
                <ClockIcon className="w-6 h-6" />
                <span>10 am to 6 pm (Sunday - Friday)</span>
              </div>
            </div>
            <div className="space-y-2 opening-hours">
              <p className="text-xl font-bold leading-relaxed tracking-wider text-primary font-title">
                Contact Details
              </p>
              <div className="flex gap-x-2">
                <PhoneIcon className="w-6 h-6" />
                <span>977-1-4275108, 4270721</span>
              </div>
              <div className="flex gap-x-2">
                <PrinterIcon className="w-6 h-6" />
                <span>+977-1-4272676</span>
              </div>
              <div className="flex gap-x-2">
                <EnvelopeIcon className="w-6 h-6" />
                <span>export@craftacp.org.np</span>
              </div>
              <div className="flex gap-x-2">
                <MapPinIcon className="w-6 h-6" />
                <span>Kupondole, Lalitpur, Nepal</span>
              </div>
            </div>
            <div className="space-y-2 social-icon">
              <p>Connect with us, we’d love to hear from you!</p>
              <div className="flex gap-x-3 text-primary">
                <FontAwesomeIcon icon={faFacebookSquare} className="w-8 h-8 " />
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 " />
                <FontAwesomeIcon icon={faPinterest} className="w-8 h-8 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
