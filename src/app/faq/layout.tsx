import PageTitile from "../components/PageTitle";
import SearchBar from "../components/faq/SearchBar";
export const metadata = {
  title: "FAQ Page",
  description: "Frequently Asked Questions",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mt-16 ml-32 flex justify-between mr-16">
        <PageTitile
          titleLineOne="Frequently Asked Questions"
          titleLineSecond=""
        />
        <div>
          <SearchBar />
        </div>
      </div>
      {children}
    </div>
  );
}
