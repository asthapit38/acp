import Link from "next/link";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl py-4 mx-auto">
      <Link href="/">
        <img
          src="/images/logos/acp-logo.svg"
          alt=""
          className="w-[214px] lg:w-[284px]"
        />
      </Link>
      <Link href="/">
        <img
          src="/images/logos/wtc-acp-g-high.png"
          alt=""
          className="w-[80px]"
        />
      </Link>
    </div>
  );
};

export default TopNavigation;
