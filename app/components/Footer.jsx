import Image from "next/image";
import Link from "next/link";
import acpSocial from "@/data/acpSocial.json";
const Footer = () => {
  return (
    <footer className="p-6 mt-16 bg-black">
      <div className="max-w-5xl px-4 mx-auto text-white lg:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="space-y-3">
            <h6 className="text-xl font-medium font-title">Connect</h6>
            <p>
              <span className="block">Association for Craft Producers </span>
              <span className="block">GPO Box 3701 </span>
              <span className="block">Ravi Bhawan Mode</span>
              <span className="block">Kathmandu, Nepal</span>
            </p>
            <p>
              <span className="block">
                Office: +977-1-5388705, 5234616, 5370721
              </span>
              <span className="block">Email: export@craftacp.org.np</span>
            </p>
          </article>
          <article className="space-y-3">
            <h6 className="text-xl font-medium font-title">Follow us on</h6>
            <div className="flex items-center gap-x-3">
              {acpSocial.data.map((social, index) => (
                <a href={social.url} target="_blank" key={index}>
                  <Image
                    priority
                    src={social.icon}
                    width={28}
                    height={28}
                    alt={`Follow us on ${social.media}`}
                  />
                </a>
              ))}
            </div>
          </article>
          <div className="space-y-3 ">
            <h6 className="text-xl font-medium font-title">
              Export Processing
            </h6>
            <Link href="" className="block">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
