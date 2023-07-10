import Image from "next/image";
import DhukutiLocation from "./components/location";
import DhukutiSlider from "./components/slider";
export default function Dhukuti() {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-6 space-y-8 lg:px-0">
      <div className="flex items-center justify-center">
        <Image
          src="/images/logos/dhukuti-logo.svg"
          width={450}
          height={120}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
          alt="Our Dhukuti"
        />
      </div>
      <p className="leading-loose text-[#000]">
        Dhukuti is our three-story treasure trove, located in Kupondole,
        Lalitpur. It displays our entire line of handmade products. The
        individual customer can browse, touch, shop and learn about our process
        and philosophies. It is a favorite place amongst our local consumers and
        tourists because of its authenticity and accessibility.
      </p>
      <DhukutiSlider />
      <DhukutiLocation />
    </div>
  );
}
