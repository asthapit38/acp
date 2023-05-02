import Link from "next/link";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl py-4 mx-auto">
      <Link href="/">
        <img src="/images/logos/acp-logo.png" alt="" />
      </Link>
      <Link href="/">
        <img src="/images/logos/wft-acp-g.png" alt="" />
      </Link>
    </div>
  );
};

export default TopNavigation;
