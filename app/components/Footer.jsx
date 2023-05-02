import Image from "next/image";
import { playfairDisplay } from "../utils/font";
import facebookIcon from "@/public/images/icons/facebook.svg";
import instagramIcon from "@/public/images/icons/instagram.svg";
import pinterestIcon from "@/public/images/icons/pinterest.svg";
import Link from "next/link";
const Footer = () => {
  const headingStyle = "text-xl font-medium";
  return (
    <footer className="p-6 mt-16 bg-black">
      <div className="max-w-5xl mx-auto text-white">
        <div className="grid grid-cols-3 gap-x-6">
          <article className="space-y-3">
            <h6 className={headingStyle + " " + playfairDisplay.className}>
              Connect
            </h6>
            <p className="font-light">
              <span className="block">Association for Craft Producers </span>
              <span className="block">GPO Box 3701 Ravi Bhawan Mode </span>
              <span className="block">Kathmandu, Nepal</span>
            </p>
            <p className="font-light">
              <span className="block">Office: +977-1-4275108, 4270721 </span>
              <span className="block">Fax: +977-1-4272676 </span>
              <span className="block">Email: export@craftacp.org.np</span>
            </p>
          </article>
          <article className="space-y-3">
            <h6 className={headingStyle + " " + playfairDisplay.className}>
              Follow us on
            </h6>
            <div className="flex gap-x-3">
              <Image priority src={facebookIcon} alt="Follow us on facebook" />
              <Image
                priority
                src={instagramIcon}
                alt="Follow us on instagram"
              />
              <Image
                priority
                src={pinterestIcon}
                alt="Follow us on pinterest"
              />
            </div>
          </article>
          <div className="space-y-3 ">
            <h6 className={headingStyle + " " + playfairDisplay.className}>
              Export Processing
            </h6>
            <Link href="" className="block">
              Terms & Conditions
            </Link>
            <Link href="" className="block">
              Download our Catalogue
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
