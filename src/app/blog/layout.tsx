import Filter from "../components/Filter";
import PageTitile from "../components/PageTitle";

export const metadata = {
  title: "Blog Page",
  description: "Blog Page Card",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
