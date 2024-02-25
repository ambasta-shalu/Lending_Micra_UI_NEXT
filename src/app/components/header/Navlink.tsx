"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
const Navlink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segmentData = useSelectedLayoutSegment();
  const segment = segmentData == null ? "" : segmentData;
  const isActive = href === `/${segment}`;

  return (
    <>
      <Link
        href={href}
        className={
          isActive ? "bg-yellowbg px-3 py-1" : "px-3 py-1 hover:bg-yellowbg"
        }
      >
        {children}
      </Link>
    </>
  );
};

export default Navlink;
