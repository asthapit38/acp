import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import dhukutiSocial from "@/data/dhukutiSocial.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
const DhukutiLocation = () => {
  return (
    <>
      <p className="text-2xl font-bold leading-relaxed tracking-wider text-center text-primary font-title">
        Location & Contact Information
      </p>
      <div className="relative">
        <div className="w-full overflow-hidden bg-gray-400 border rounded-2xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.05036706273!2d85.3178612!3d27.6860057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b43fffcf93%3A0xe3e71155015d28ed!2sDhukuti%20Store!5e0!3m2!1sen!2snp!4v1682914474488!5m2!1sen!2snp"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="relative w-full p-6 mt-4 space-y-5 bg-white rounded-md shadow-md lg:mt-0 lg:max-w-xs lg:absolute lg:bottom-4 lg:right-4">
          <div className="space-y-2 opening-hours">
            <p className="text-xl font-bold leading-relaxed tracking-wider text-primary font-title">
              Opening Hours
            </p>
            <div className="flex gap-x-2">
              <ClockIcon className="w-6 h-6" />
              <span>Opens everyday 10 am to 7 pm</span>
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
              {dhukutiSocial.data.map((social, index) => (
                <a href={social.url} target="_blank" key={index}>
                  {social.media === "facebook" && (
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      className="w-8 h-8 "
                    />
                  )}
                  {social.media === "instagram" && (
                    <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 " />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DhukutiLocation;
