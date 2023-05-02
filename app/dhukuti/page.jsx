import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Dhukuti() {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8">
      <div className="flex items-center justify-center">
        <Image
          src="/images/logos/dhukuti-logo.png"
          width={450}
          height={120}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
          alt="Our Dhukuti"
        />
      </div>
      <p className="font-light leading-loose">
        Dhukuti is our four-story treasure trove for the fair trade consumer.
        Located in Lalitpur, Dhukuti displays our entire line of ACP items. The
        individual customer can browse, touch, shop and learn about our process
        and philosophies. It is a favorite place amongst tourists and Nepalis
        because of its authenticity and accessibility.
      </p>
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-center text-primary font-title">
        Location & Contact Information
      </p>
      <div className="relative">
        <div className="w-full overflow-hidden bg-gray-400 border rounded-2xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.05036706273!2d85.3178612!3d27.6860057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b43fffcf93%3A0xe3e71155015d28ed!2sDhukuti%20Store!5e0!3m2!1sen!2snp!4v1682914474488!5m2!1sen!2snp"
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
              <span>+977-1-5535107</span>
            </div>
            <div className="flex gap-x-2">
              <EnvelopeIcon className="w-6 h-6" />
              <span>dmkt@acp.org.np</span>
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
  );
}
