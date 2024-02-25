import PageTitile from "../components/PageTitle";
export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mt-16 mx-32 flex justify-between">
        <PageTitile titleLineOne="Privacy Policy" titleLineSecond="" />
      </div>
      {children}
    </div>
  );
}
